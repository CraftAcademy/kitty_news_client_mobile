import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const SingInScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text>Sign In</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Sign-In"
        color="purple"
        onPress={() => authenticateUser()}
      />
    </View>
  )
}

export default SingInScreen

const styles = StyleSheet.create({})
