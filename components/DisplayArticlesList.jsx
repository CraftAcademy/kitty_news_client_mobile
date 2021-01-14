import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

const DisplayArticlesList = ({ navigation, article }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SingleArticle", { article: article })
        }}
      >
        <Image
          source={{ uri: article.image }}
          defaultSource={{
            uri:
              "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg",
          }}
          style={styles.image}
        />
        <View style={styles.card}>
          <Text style={styles.title}>{article.title}</Text>
          <Text
            style={styles.lead}>
            {article.lead}
          </Text>
          <Text style={styles.created}>{article.created}</Text>
        </View>
      </TouchableOpacity>
      {/* 
      <View style={styles.card}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.lead}>{article.lead}</Text>
      </View> */}
    </>
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
