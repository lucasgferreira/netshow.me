import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Video } from "expo-av";
import { useVideos } from "@/app/services/videos";
import MessageDisplayWrapper from "@/app/Utils/MessageDisplayWrapper";
import { Chip, Content, Row, Title } from "./style";
import ContentLoader, { Rect } from "react-content-loader/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextBold } from "@/app/styles/text";
import { useTheme } from "@react-navigation/native";

export default function VideoScreen({ route }: any) {
  const { colors } = useTheme();

  const data = route?.params?.video || {};

  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingAvaliation, setLoadingAvaliation] = useState(false);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  const { getVideo, patchVideo } = useVideos();

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    setLoading(true);
    try {
      const response = await getVideo(data.id);

      if (response) {
        setVideo(response);
      }
    } catch (error) {
      console.error("Erro ao carregar sites:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateViews = async (status) => {
    if (status.isPlaying && !hasBeenViewed) {
      setHasBeenViewed(true);
      try {
        const views = video?.views + 1;
        const response = await patchVideo(data.id, { views });

        if (response) {
          setVideo({ ...video, views });
        }
      } catch (error) {
        console.error("Erro ao carregar sites:", error);
        setError(error);
      } finally {
      }
    }
  };

  const updateLikes = async (likes = 0) => {
    if (likes < 0) {
      return;
    }
    setLoadingAvaliation(true);
    try {
      const response = await patchVideo(data.id, { likes });

      if (response) {
        setVideo(response);
      }
    } catch (error) {
      console.error("Erro ao carregar sites:", error);
      setError(error);
    } finally {
      setLoadingAvaliation(false);
    }
  };

  if (loading) {
    return (
      <>
        {[...Array(1)].map((_, index) => (
          <View key={index} style={{ padding: 10 }}>
            <ContentLoader
              speed={2}
              width={"100%"}
              height={400}
              viewBox={`0 0 400 400`}
              backgroundColor="#d9d9d9"
              foregroundColor="#999"
            >
              <Rect x="0" y="0" rx="8" ry="8" width={"100%"} height={220} />
              <Rect x="0" y="230" rx="8" ry="8" width={"100%"} height={25} />
              <Rect x="0" y="270" rx="8" ry="8" width={"100%"} height={40} />
              <Rect x="0" y="320" rx="8" ry="8" width={"100%"} height={60} />
            </ContentLoader>
          </View>
        ))}
      </>
    );
  }

  return (
    <MessageDisplayWrapper
      error={error}
      onRetry={() => {
        fetchVideo();
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              fetchVideo();
            }}
          />
        }
      >
        <Video
          ref={videoRef}
          style={{ width: "100%", height: 220 }}
          source={{
            uri: video?.hls_path, // Link do vídeo
          }}
          useNativeControls
          resizeMode="contain"
          onPlaybackStatusUpdate={updateViews}
        />

        <Row style={{ marginVertical: 10 }}>
          <Row>
            <MaterialCommunityIcons name="eye" color={"#555"} size={20} />

            <Text style={{ fontSize: 16, marginLeft: 5 }}>
              <TextBold style={{ fontSize: 16 }}>{video?.views}</TextBold>{" "}
              Visualizações
            </Text>
          </Row>

          <Chip style={{ height: 40, width: 120 }}>
            {loadingAvaliation ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : (
              <Row>
                <TouchableOpacity onPress={() => updateLikes(video?.likes + 1)}>
                  <AntDesign name="like1" color={"#555"} size={24} />
                </TouchableOpacity>

                <TextBold style={{ fontSize: 18, marginHorizontal: 10 }}>
                  {video?.likes}
                </TextBold>

                <TouchableOpacity onPress={() => updateLikes(video?.likes - 1)}>
                  <AntDesign name="dislike1" color={"#555"} size={24} />
                </TouchableOpacity>
              </Row>
            )}
          </Chip>
        </Row>

        <Content>
          <Title>{video?.title}</Title>
          <Text style={{ marginTop: 20 }}>{video?.description}</Text>
        </Content>
      </ScrollView>
    </MessageDisplayWrapper>
  );
}
