import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import ArticleServices from "../modules/ArticleServices";

const SingleArticle = (props) => {
  const { id } = props.route.params.article;
  const { currentArticle, credentials } = useSelector(state => state);
  useEffect(() => {
    ArticleServices.show(id, credentials);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: currentArticle.image }}
        style={styles.image}
      />
      <Text style={styles.title}>{currentArticle.title}</Text>
      <Text style={styles.lead}>{currentArticle.lead}</Text>
      <Text style={styles.body}>{currentArticle.body}</Text>
      <Text
        style={styles.created}
      >{`Created at: ${currentArticle.created}`}</Text>
    </View>
  );
};

export default SingleArticle;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    padding: 20,
    color: "rgba(14, 13, 13, 0.6)",
    fontSize: 30,
  },
  lead: {
    padding: 20,
    fontSize: 16,
  },
  body: {
    padding: 30,
    color: "black",
    fontSize: 18,
  },
  created: {
    padding: 10,
    color: "black",
    fontSize: 10,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
});
