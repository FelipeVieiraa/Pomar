import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles';


export default function PickerSelect({ filter, onClose, onChange }) {
    return (
        <PickerView>
            <RNPickerSelect 
                style={{
                    inputIOS: {
                        height: 50,
                        padding: 5,
                        backgroundColor: '#FFF',
                        fontSize: 16,
                    }
                }}
                placeholder={{
                    label: 'Selecionar grupo...',
                    color: '#222',
                    value: null,
                }}
                onValueChange={ grupo => onChange(grupo) }
                items={ [
                    {label: 'Todos', value: 'todos', color: '#222'},
                    {label: 'Abacateiro', value: 'abacateiro', color: '#222'},
                    {label: 'Mangueira', value: 'mangueira', color: '#222'},
                    {label: 'Goiabeira', value: 'goiabeira', color: '#222'},
                    {label: 'Amoreira', value: 'amoreira', color: '#222'},
                    {label: 'Bananeira', value: 'bananeira', color: '#222'},
                    {label: 'Uva', value: 'uva', color: '#222'},
                ] }
            />
        </PickerView>
    );
    }