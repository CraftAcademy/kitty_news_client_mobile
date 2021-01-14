import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ArticleServices from "../modules/ArticleServices";
import { StatusBar } from 'expo-status-bar'
import DisplayArticlesList from './DisplayArticlesList'

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#ebc1c4",
  },
});

const HomeScreen = () => {
  const { articles } = useSelector((state) => state)
  useEffect(() => {
    ArticleServices.index()}
    ,[])
    return ( 
      <View
      style={styles.container}>
        <StatusBar 
        style="auto" /> 
        <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <DisplayArticlesList article={item} />}
         />
      </View>
    )
  }

  export default HomeScreen