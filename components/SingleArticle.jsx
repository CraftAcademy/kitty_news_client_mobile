import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import ArticleServices from "../modules/ArticleServices";

const SingleArticle = (props) => {
  const { id } = props.route.params.article;
  const { currentArticle } = useSelector((state) => state);
  useEffect(() => {
    ArticleServices.show(id);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: currentArticle.image }}
        defaultSource={{
          uri:
            "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{currentArticle.title}</Text>
      <Text 
      style={styles.body}>{currentArticle.body}</Text>
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
    color: "pink",
    fontSize: 30,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
  },

  body: {
    padding: 30,
    color: "purple",
    fontSize: 18,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
});

// const SingleArticle = ({ navigation, article }) => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         navigation.navigate("SingleArticle", { article: article })
//       }}
//     >
//       <Image source={{ uri: article.image }} style={styles.image} />
//       <View style={styles.card}>
//         <Text style={styles.title}>{article.title}</Text>
//         <Text
//           style={styles.lead}>
//           {article.lead}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   )
// }

// export default SingleArticle

// const styles = StyleSheet.create({
//   card: {
//     position: "absolute",
//     width: Dimensions.get("window").width,
//     padding: 7,
//     paddingLeft: 10,
//     paddingRight: 8,
//     bottom: 8,
//     backgroundColor: "rgba(0,0,0,0.3)",
//   },
//   title: {
//     color: "white",
//     fontSize: 30,
//   },
//   subtitle: {
//     color: "white",
//     fontSize: 16,
//   },
//   image: {
//     height: 250,
//     width: Dimensions.get("window").width,
//   },
// });
