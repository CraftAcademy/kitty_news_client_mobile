import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './components/HomeScreen'
import SingleArticle from './components/SingleArticle'
import SignInScreen from './components/SignInScreen';
import { FontAwesome5 } from '@expo/vector-icons'

const Stack = createStackNavigator()

const App = () => {
  const { appHeader } = useSelector((state) => state)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Meow"
          component={HomeScreen}
          options={(props) => ({
            headerRight: () => {
              return (
                <FontAwesome5
                  name="cat"
                  size={24}
                  color="white"
                  onPress={() => props.navigation.navigate('SignIn')}
                  style={{ marginRight: 15 }}
                />
              )
            },
            title: appHeader,
            ...styles
          })}
        />

        <Stack.Screen
          name="SingleArticle"
          component={SingleArticle}
          options={{
            title: 'The Cattiest News',
            ...styles
          }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = {
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTitleStyle: {
    color: 'rgb(240,230,140)',
    fontSize: 25,
    fontWeight: 'bold',
  },
}
