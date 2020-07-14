import React, { useContext, useState, useEffect } from 'react';
import { Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import { Container,
        Content,
        Logo,
        AreaInput,
        Input,
        SubmitButton,
        SubmitText,
        Link,
        LinkText,
        LogoText
    } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Logon() {
    const navigation = useNavigation();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { signIn, loading } = useContext(AuthContext);

    function handleLogin() {
      signIn(email, password);
    }

    useEffect(() => {
      alert('Email: felipe@hotmail.com, Senha: 123123');
    }, []);

    return (
      <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <Container>
            <Content
              behavior={Platform.OS === 'ios' ? 'padding' : ''}
              enabled
            >

              <LogoText>Pomar</LogoText>

              <AreaInput>
                <Input 
                  placeholder="Email"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={email}
                  onChangeText={ text => setEmail(text) }
                />
              </AreaInput>
    
              <AreaInput>
                <Input 
                  placeholder="Senha"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={password}
                  onChangeText={ text => setPassword(text) }
                  secureTextEntry={true}
                />
              </AreaInput>

              <SubmitButton onPress={handleLogin}>
                <SubmitText>Acessar</SubmitText>
              </SubmitButton>

              { 0 == 1 ? (<Link onPress={ () => navigation.navigate('Register') }>
                            <LinkText>Criar uma conta!</LinkText>
                          </Link>)
                       : <></>
              }      
    
            </Content>
        </Container>
      </TouchableWithoutFeedback>
      );
    }