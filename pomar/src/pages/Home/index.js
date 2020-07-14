import React, { useState, useEffect } from 'react';
import { Container, List, EmpresaText, UserText, Ferramentas, SearchEspecie } from './styles';
import Listagem from '../../components/Listagem';
import Icon from 'react-native-vector-icons/MaterialIcons'
//import { FlatList } from 'react-native-gesture-handler';

//Components
import Header from '../../components/Header';
import PickerSelect from '../../components/PickerSelect';


export default function Home() {

  const [ filter, setFilter ] = useState(null);
  const [ show, setShow ] = useState(false);
  
  const [ grupo, setGrupo ] = useState([]);

  const especie = [
    { id: '1', descricao: 'Abacateiro' },
    { id: '2', descricao: 'Mangueira ' },
    { id: '3', descricao: 'Goiabeira' },
    { id: '4', descricao: 'Amoreira' },
    { id: '5', descricao: 'Bananeira' },
  ];

  const arvores = [
    { id: '1uyu242f', descricao: 'Persea americana Mill', idade: '2', especie: 'Abacateiro', image: 'https://images.unsplash.com/photo-1590238158897-5758b2b5da1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=745&q=80' },
    { id: 'jh32g42f', descricao: 'Mangifera indica L', idade: '3', especie: 'Mangueira', image: 'https://images.unsplash.com/photo-1524807621076-c7ba046f3f3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' },
    { id: 'f78ss5g7', descricao: 'Psidium guajava L', idade: '1', especie: 'Goiabeira', image: 'https://images.unsplash.com/photo-1521678692304-15d9dbb84a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
    { id: 'dfj6da53', descricao: 'Morus nigra L', idade: '5', especie: 'Amoreira', image: 'https://images.unsplash.com/photo-1592460018841-d76c45b84f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
    { id: 'kfha86dj', descricao: 'Musa', idade: '3', especie: 'Bananeira', image: 'https://images.unsplash.com/photo-1527546712175-827fa4321096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=818&q=80' },
    { id: 'ad6af8g6', descricao: 'Paradisíaca L', idade: '5', especie: 'Bananeira', image: 'https://images.unsplash.com/photo-1570497239782-60732f596cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' },
    { id: '22tg22gyy', descricao: 'ruby supreme', idade: '5', especie: 'Goiabeira', image: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Guava-Tree-3-450W_1024x1024.jpg?v=1549690084' },
    { id: 'asddad5q4', descricao: 'Guava 1', idade: '3', especie: 'Goiabeira', image: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
    { id: 'kj6l4hlff', descricao: 'Banana da terra', idade: '6', especie: 'Bananeira', image: 'https://images.unsplash.com/photo-1571152557337-9ab79fd76eb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
    { id: 'skad66a4f', descricao: 'Banana G.', idade: '4', especie: 'Bananeira', image: 'https://images.unsplash.com/photo-1543218024-57a70143c369?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
    { id: 'daklg35h1', descricao: 'Uva Argentina', idade: '3', especie: 'Uva', image: 'https://images.unsplash.com/photo-1515778767554-42d4b373f2b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
    { id: 'ifd57qgg4', descricao: 'Uva Amarela', idade: '5', especie: 'Uva', image: 'https://images.unsplash.com/photo-1573574635896-36753f4e38bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
  ];

  useEffect(() => {
    function reloader() {
      if(filter == 'todos') {
        setGrupo(arvores);
        return;
      }

      setGrupo([]);

      const groupe = arvores.filter( arvore => arvore.especie.toLowerCase() == filter );

      setGrupo(groupe);
    }

    reloader();
    
  }, [filter]);

  function handleShowPicker() {
    if(show == true) {
      return setShow(false);
    }

    setShow(true);
    
  }

  function handleClose() {
    setShow(false);
  }

  const onChange = (filtr) => {
    setShow(Platform.OS === 'ios');
    setFilter(filtr);
  }

 return (
  <Container>
    <Header />

    <EmpresaText>Pomar</EmpresaText>

    <Ferramentas>
      <SearchEspecie onPress={handleShowPicker}>
        <Icon name="search" color="#FFF" size={35} />
      </SearchEspecie>
    </Ferramentas>

    <List
      showsVerticalScrollIndicator={false}
      data={grupo.length == 0  ? arvores : grupo}
      keyExtractor={ item => item.id }
      renderItem={({item}) => ( <Listagem data={item} tipo={'Home'} />)}
    />

    { show && ( <PickerSelect onClose={handleClose} filter={filter} onChange={onChange} />) }

  </Container>
  );
}