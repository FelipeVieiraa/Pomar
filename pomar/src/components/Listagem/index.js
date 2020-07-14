import React from 'react';
import { Content, Listar, ArvoreImg, ContentFooter, EspecieText, DescricaoText, IdadeText } from './styles';

export default function Listagem({data, tipo}) {

    if(tipo == 'Home') {
        return(
            <Content>
                    <Listar>
                        <ArvoreImg source={{uri: data.image }} />

                        <ContentFooter>
                            <EspecieText>{data.especie}</EspecieText>
                            <DescricaoText>{data.descricao}</DescricaoText>
                            <IdadeText>{data.idade} anos</IdadeText>
                        </ContentFooter>
                    
                    </Listar>
            </Content>
        );
    }else {
        return(
            <Content>
                    <Listar>
                        <ArvoreImg source={{uri: data.image }} />

                        <ContentFooter>
                            <EspecieText>{data.especie}</EspecieText>
                            <DescricaoText>{data.descricao}</DescricaoText>
                            <IdadeText>Coletado: {data.dt_coleta}</IdadeText>
                        </ContentFooter>
                    
                    </Listar>
            </Content>
        );
    }
}
