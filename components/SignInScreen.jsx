import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Auth from '../modules/auth'

const SingInScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState()
  const auth = new Auth({ host: 'https://kitty-news.herokuapp.com/api' })

  const authenticateUser = () => {
    auth
      .signIn(email, password)
      .then(() => {
        props.navigation.navigate('Meow')
        alert('Welcome cute kitty!')
      })
      .catch((error) => {
        setMessage(error.response.data.errors[0])
      })
  }

  return (
    <View>
      <Text style={{ marginBottom: 20, marginTop: 10 }}>Sign In</Text>
      <TextInput
        placeholder='Email'
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder='Password'
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title='Sign-In'
        color='black'
        onPress={() => authenticateUser()}
      />
      {message && <Text>{message}</Text>}
    </View>
  )
}

export default SingInScreen

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    padding: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
})
