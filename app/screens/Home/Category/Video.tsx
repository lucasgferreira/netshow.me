import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Video } from "expo-av";
import { useVideos } from "@/app/services/videos";
import MessageDisplayWrapper from "@/app/Utils/MessageDisplayWrapper";
import { Content, Row, Title } from "./style";
import ContentLoader, { Rect } from "react-content-loader/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function VideoScreen({ route }: any) {
  const data = route?.params?.video || {};

  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);
  const { getVideo } = useVideos();

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
          onPlaybackStatusUpdate={setStatus}
        />

        <Row style={{ justifyContent: "flex-start", marginVertical: 10 }}>
          <Row>
            <MaterialCommunityIcons name="eye" color={"#555"} size={16} />

            <Text style={{ fontSize: 12, marginLeft: 5 }}>
              {video?.views} Visualizações
            </Text>
          </Row>

          <Row>
            <AntDesign name="like1" color={"#555"} size={16} />

            <Text style={{ fontSize: 12, marginLeft: 5 }}>
              {video?.likes} Marcações como "Gostei"
            </Text>
          </Row>
        </Row>

        <Content>
          <Title>{video?.title}</Title>
          <Text style={{ marginTop: 20 }}>{video?.description}</Text>
        </Content>
      </ScrollView>
    </MessageDisplayWrapper>
  );
}
