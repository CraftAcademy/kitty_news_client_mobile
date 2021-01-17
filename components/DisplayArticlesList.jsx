import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux"

const DisplayArticlesList = ({ navigation, article }) => {
  const { credentials } = useSelector(state => state)

  return (
    <TouchableOpacity
      onPress={() => {
        if (credentials) {
          navigation.navigate("SingleArticle", { article: article })
        } else {
          alert("HISS! Please sign in to read an article!")
        }
      }}
    >
      <Image
        source={{ uri: article.image }}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.lead}>{article.lead}</Text>
        <Text style={styles.created}>{article.created}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DisplayArticlesList;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 0,
    backgroundColor: "rgba(14, 13, 13, 0.6)",
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  lead: {
    color: "white",
    fontSize: 16,
  },
  created: {
    color: "white",
    fontSize: 12,
    paddingBottom: 5,
    paddingTop: 3,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
});
