import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Articles from "../modules/Articles";
import { StatusBar } from 'expo-status-bar'
import ArticleIndexDetails from './ArticleIndexDetails'

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroudColor: "#ebc1c4",
  },
});

const HomeScreen = () => {
  const { articles } = useSelector((state) => state)
  useEffect(() => {
    Articles.index()}
    ,[])
    return ( 
      <View
      style={styles.container}>
        <StatusBar 
        style="auto" /> 
        <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <ArticleIndexDetails article={item} />}
         />
      </View>
    )
  }

  export default HomeScreen