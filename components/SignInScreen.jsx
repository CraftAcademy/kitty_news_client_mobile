import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Auth from '../modules/auth'

const SingInScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState()
  const auth = new Auth({ host: 'http://localhost:3000/api' })

  const authenticateUser = () => {
    auth
      .signIn(email, password)
      .then(() => {
        props.navigation.navigate('Meow')
        alert("Welcome cute kitty!")
      })
      .catch((error) => {
        setMessage(error.response.data.errors[0])
      })
  }

  return (
    <View>
      <Text>Sign In</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Sign-In"
        color="purple"
        onPress={() => authenticateUser()}
      />
      {message && <Text>{message}</Text>}
    </View>
  )
}

export default SingInScreen

const styles = StyleSheet.create({})
