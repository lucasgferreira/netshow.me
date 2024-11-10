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
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useVideos } from "@/app/services/videos";
import ContentLoader, { Rect } from "react-content-loader/native";

const VideoScreen = ({ route }: any) => {
  const { colors } = useTheme();

  const categoryId = route?.params?.categoryId || null;

  const navigation = useNavigation();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false); // Indicador de carregamento
  const [page, setPage] = useState(1); // Página atual
  const [hasMore, setHasMore] = useState(true); // Verifica se há mais páginas para carregar
  const [error, setError] = useState(null); // Verifica se há mais páginas para carregar
  const [search, setSearch] = useState("");

  const { getVideosCategory } = useVideos();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions:
        Platform.OS !== "ios"
          ? {
              barTintColor: "rgba(150,150,150,0.1)",
              placeholder: "Buscar video",
              tintColor: colors.placeholder,
              hintTextColor: colors.placeholder,
              headerIconColor: colors.text,
              textColor: colors.text,
              obscureBackground: true,
              statusBarStyle: "dark",
              onChangeText: (event) => setSearch(event.nativeEvent.text),
            }
          : {
              placeholder: "Buscar video",
              hideWhenScrolling: false,
              onChangeText: (event) => setSearch(event.nativeEvent.text),
            },
    });
  }, [navigation]);

  useEffect(() => {
    fetchVideos(1);
  }, []);

  const fetchVideos = async (page: number) => {
    setLoading(true);
    try {
      const response = await getVideosCategory(categoryId, page, 5);

      const { data } = response;
      console.log(data);

      setVideos((prevData) => [...prevData, ...data]);
      setHasMore(response.next != null);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(page + 1); // Incrementa a página
      fetchVideos(page + 1);
    }
  };

  const refeatchData = () => {
    setPage(1);
    setVideos([]);
    fetchVideos(1);
  };

  // Componente para exibir cada vídeo
  const VideoItem = ({ video }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Video", { video })}>
        <View style={{ height: 300, paddingRight: 10 }}>
          <Image
            source={{ uri: video.thumbnail }}
            style={{ height: 300, width: 190 }}
            resizeMode="contain"
          />
          {/* <Text style={styles.videoTitle}>{video.title}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  if (loading && page == 1) {
    return (
      <View style={{ padding: 10 }}>
        <ContentLoader
          speed={2}
          width={380}
          height={900}
          viewBox={`${380} ${300}`}
          backgroundColor="#d9d9d9"
          foregroundColor="#999"
        >
          <Rect x="0" y="0" rx="8" ry="8" width={180} height={300} />
          <Rect x="190" y="0" rx="8" ry="8" width={180} height={300} />

          <Rect x="0" y="305" rx="8" ry="8" width={180} height={300} />
          <Rect x="190" y="305" rx="8" ry="8" width={180} height={300} />

          <Rect x="0" y="610" rx="8" ry="8" width={180} height={300} />
          <Rect x="190" y="610" rx="8" ry="8" width={180} height={300} />
        </ContentLoader>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 10 }}
      data={videos} // Adiciona o item "ver mais" ao final da lista
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <VideoItem key={index} video={item} />}
      onEndReachedThreshold={0.2} // Define o quão próximo do fim da lista o loadMore será chamado
      onEndReached={loadMore} // Chama o loadMore quando o fim da lista é alcançado
      ListFooterComponent={
        loading ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : null
      }
    />
  );
};

export default VideoScreen;
