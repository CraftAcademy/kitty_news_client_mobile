import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const DisplayArticlesList = ({ article }) => {
  return (
    <>
      <Image
        source={{ uri: article.image }}
        defaultSource={{ uri: "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg" }}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.title}>
          {article.title}
        </Text>
        <Text style={styles.lead}>
          {article.lead}
        </Text>
        <Text style={styles.created}>
          {article.created}
        </Text>
      </View>
    </>
  )
}

export default DisplayArticlesList

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get('window').width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
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
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
})
