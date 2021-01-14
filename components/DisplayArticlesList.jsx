import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const DisplayArticlesList = ({ article }) => {
  return (
    <>
      <Image
        // source={{ url: article.image }}
        source={{ uri: "https://i.pinimg.com/originals/3c/da/56/3cda56c31c5022398cd70380c30fa4ef.jpg" }}
        style={styles.image}
      />
      <View>
        <Text>
          {article.title}
        </Text>
        <Text>
          {article.lead}
        </Text>
        <Text>
          {article.category}
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
  subtitle: {
    color: "white",
    fontSize: 16,
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
})
