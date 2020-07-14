import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';
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

    return (
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
                />
              </AreaInput>
    
              <SubmitButton onPress={handleLogin}>
                <SubmitText>Acessar</SubmitText>
              </SubmitButton>
    
              <Link onPress={ () => navigation.navigate('Register') }>
                <LinkText>Criar uma conta!</LinkText>
              </Link>
              
    
            </Content>
        </Container>
      );
    }