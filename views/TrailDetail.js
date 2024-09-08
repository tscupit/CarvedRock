import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";

const TrailDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [trailData, setTrailData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const { data: review } = await axios.get(
        `http://192.168.1.181:3000/trailreviews/${id}`
      );
      setTrailData(review);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const longPressGesture = Gesture.LongPress().onEnd(() => {
    navigation.goBack();
  });

  return (
    <GestureDetector gesture={longPressGesture}>
      <View style={styles.container}>
        <ScrollView>
          <Header />
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <View style={styles.reviewTitleRow}>
              <Text style={styles.reviewTitle}>{trailData.title}</Text>
              <Image
                style={styles.reviewImage}
                source={{ uri: trailData.image }}
              />
              <Text style={styles.reviewAuthor}>By {trailData.author}</Text>
              <Text style={styles.reviewContent}>{trailData.review}</Text>
            </View>
          )}
          <Text style={styles.message}>LONGPRESS TO GO BACK</Text>
        </ScrollView>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reviewTitleRow: {
    backgroundColor: "#000000",
    paddingTop: 10,
    marginTop: 5,
  },
  reviewTitle: {
    fontFamily: "OpenSans-BoldItalic",
    fontSize: 30,
    color: "#FFFFFF",
  },
  reviewImage: {
    height: 400,
    width: 600,
    resizeMode: "cover",
  },
  reviewAuthor: {
    alignSelf: "flex-end",
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
    color: "#000000",
    paddingRight: 10,
    paddingBottom: 10,
  },
  reviewContent: {
    fontFamily: "OpenSans-Regular",
    fontSize: 16,
    color: "#000000",
    padding: 10,
  },
  message: {
    alignSelf: "center",
    fontFamily: "OpenSans-BoldItalic",
    color: "#000000",
  },
});

export default TrailDetail;
