import styled from 'styled-components';


export const Container = styled.View`
    flex: 1;
    background-color: #131313;
    align-items: center;
`;

export const List = styled.FlatList`
    background-color: #FFF;
    width: 90%;
    border-radius: 4px;
    padding: 30px 0px 5px 0px;
    margin-top: 5px;
`;

export const EmpresaText = styled.Text`
    font-size: 30px;
    color: #FFF;
    font-weight: bold;
`;

export const UserText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-style: italic;
    text-align: left;
    width: 90%;
`;

export const Ferramentas = styled.View`
    width: 90%;
    margin-right: 20px;
`;

export const SearchEspecie = styled.TouchableOpacity`
    align-items: flex-end;
    width: 100%;
`;



