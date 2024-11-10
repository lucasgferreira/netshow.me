import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSites } from "@/app/services/sites";
import MessageDisplayWrapper from "@/app/Utils/MessageDisplayWrapper";
import { useCategories } from "@/app/services/categories";
import { Chip, ChipTitle, Row, Title } from "./style";
import VideoList from "./VideoList";
import ContentLoader, { Rect } from "react-content-loader/native";

// Componente principal
const VideoScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [sites, setSites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const { getSites } = useSites();
  const { getCategories } = useCategories();

  useEffect(() => {
    fetchSites();
    fetchCategories();
  }, []);

  const fetchSites = async () => {
    try {
      const response = await getSites();

      if (response) {
        setSites(response);
      }
    } catch (error) {
      console.error("Erro ao carregar sites:", error);
      setError(error);
    } finally {
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await getCategories();

      if (response) {
        setCategories(response);
      }
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        {[...Array(3)].map((_, index) => (
          <View key={index} style={{ padding: 10 }}>
            <ContentLoader
              speed={2}
              width={"100%"}
              height={240}
              viewBox={`0 0 400 240`}
              backgroundColor="#d9d9d9"
              foregroundColor="#999"
            >
              <Rect x="0" y="0" rx="8" ry="8" width={"100%"} height={20} />
              <Rect x="0" y="30" rx="8" ry="8" width={130} height={230} />
              <Rect x="135" y="30" rx="8" ry="8" width={130} height={230} />
              <Rect x="270" y="30" rx="8" ry="8" width={130} height={230} />
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
        fetchSites();
        fetchCategories();
      }}
    >
      <View>
        <FlatList
          // ref={flatListRef} // Define a referência
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => {
                // Recarrega os dados e reseta a página para 1
                fetchSites();
                fetchCategories();
              }}
            />
          }
          contentContainerStyle={{ paddingBottom: 16 }}
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: category, index }) => {
            return (
              <View key={index} style={{}}>
                <Row>
                  <Title>{category.title}</Title>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Videos", { categoryId: category.id })
                    }
                  >
                    <Text>Ver mais</Text>
                  </TouchableOpacity>
                </Row>
                <VideoList categoryId={category.id} />
              </View>
            );
          }}
        />
      </View>
    </MessageDisplayWrapper>
  );
};

export default VideoScreen;
