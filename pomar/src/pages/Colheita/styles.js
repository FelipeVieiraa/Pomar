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

export const PagText = styled.Text`
    font-size: 30px;
    color: #FFF;
    font-weight: bold;
`;

export const DateText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-style: italic;
    text-align: left;
    width: 90%;
`;

export const Ferramentas = styled.View`
    width: 90%;
    margin-right: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const SearchEspecie = styled.TouchableOpacity`
    min-width: 40px;
`;

export const SearchDate = styled.TouchableOpacity`
    min-width: 40px;
`;

export const ContentNull = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const NullText = styled.Text`
    font-size: 25px;
    color: #FFF;
`;

export const FilterText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-style: italic;
    text-align: left;
    width: 90%;
`;






