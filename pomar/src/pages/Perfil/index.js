import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { Container, Nome, Logout, LogoutText } from './styles';

//Components
import Header from '../../components/Header';

export default function Perfil() {

    const { user, signOut } = useContext(AuthContext);

 return (
    <Container>
       <Header />
       <Nome>{ user && user.nome }</Nome>

       <Logout onPress={ () => signOut() }>
           <LogoutText>Sair</LogoutText>
       </Logout>
   </Container>
  );
}