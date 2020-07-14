import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);


    const users = [
        { id: 'u57wr8q4', nome: 'Felipe', email: 'felipe@hotmail.com', senha: '123123' }
    ];


    //Verifica se o usuário já está logado
    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }

        loadStorage();

    }, [] );

    //Logar
    async function signIn(email, password) {
        const user = users.find( user => user.email == email && user.senha == password);

        if(user) {

            let data = {
                id: user.id,
                nome: user.nome,
                email: user.email,
            }

            setUser(data);
            storageUser(data);
        }else {
            alert('Dados Incorretos, tente novamente!');
        }
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    //Deslogar
    async function signOut() {
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
        } )
    }

    //Cadastrar
    async function signUp(email, password, nome) {
        alert("Ainda Não é possível se cadastrar");
    }

    return(
        <AuthContext.Provider
            value={{ signed: !!user, user, signUp, signIn, loading, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );

}

