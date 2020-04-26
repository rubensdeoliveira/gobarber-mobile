import React from 'react'
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logo from '../../assets/logo.png'

import { Container, Title, BackToSign, BackToSignText } from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation()

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logo} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log('teste')
              }}
            >
              Cadastrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSign
        onPress={() => {
          navigation.navigate('SignIn')
        }}
      >
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignText>Voltar para logon</BackToSignText>
      </BackToSign>
    </>
  )
}

export default SignUp
