import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useVideos } from "@/app/services/videos";
import ContentLoader, { Rect } from "react-content-loader/native";

const VideoScreen = ({ categoryId }: any) => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const { getVideosCategory } = useVideos();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await getVideosCategory(categoryId, 1, 10);

      const { data } = response;
      if (data) {
        setVideos(data);
      }
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Componente para exibir cada vídeo
  const VideoItem = ({ video }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Video", { video })}>
        <View style={{ minHeight: 200, minWidth: 130, paddingRight: 10 }}>
          <Image
            source={{ uri: video.thumbnail }}
            style={{ minHeight: 200, minWidth: 130 }}
            resizeMode="contain"
            defaultSource={require("@/app/assets/imgs/emptyImage.png")}
          />
          {/* <Text style={styles.videoTitle}>{video.title}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={{ padding: 10 }}>
        <ContentLoader
          speed={2}
          width={"100%"}
          height={200}
          viewBox={`${"100%"} ${200}`}
          backgroundColor="#d9d9d9"
          foregroundColor="#999"
        >
          <Rect x="0" y="0" rx="8" ry="8" width={130} height={200} />
          <Rect x="135" y="0" rx="8" ry="8" width={130} height={200} />
          <Rect x="270" y="0" rx="8" ry="8" width={130} height={200} />
        </ContentLoader>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 10 }}
      data={videos} // Adiciona o item "ver mais" ao final da lista
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <VideoItem key={index} video={item} />}
    />
  );
};

export default VideoScreen;
