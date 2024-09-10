import React, {useState, useEffect} from 'react'
import InputEditar from '../InputEditar.jsx';
import { useOutletContext } from 'react-router-dom';
import ListaCheckbox from '../../../../components/lista-checkbox/ListaCheckbox';
import {Button} from '../../../../components/input/botao/Button';

function EdicaoUsuarios() {

  const [subSecao, setSubSecao, modoEdicao, setModoEdicao] = useOutletContext();

  const FiltrosInfo = [
    { label: "Perfil", content: "Administrador", type: "select", tamanho:"78.9vw", marginRight: "100vw" },
  ];

  const placeholders = [ 
    { 
        area: "Sistema de Gestão • ",
        subareas: [
            { 
                page: "Fila de Demandas • ",
                actions: ["Editar", "Consultar"]
            },
            { 
                page: "Validação de Conteúdo • ",
                actions: ["Editar", "Consultar", "Inserir"]
            },
            { 
                page: "Produtos com Erro • ",
                actions: ["Consultar"]
            }
        ]
    },
    { 
        area: "Gestão de Parâmetros • ",
        subareas: [
            { 
                page: "Gestão de Campos • ",
                actions: ["Consultar"]
            },
            { 
                page: "Gestão de Fornecedores • ",
                actions: ["Editar", "Consultar", "Inserir"]
            },
            { 
                page: "Gestão de Usuários • ",
                actions: ["Consultar", "Editar"]
            },
            { 
                page: "Tipos de Informação • ",
                actions: ["Consultar", "Editar"]
            }
        ]
    },
    { 
      area: "DashBoard ",
      subareas: [
          { 
              page: "",
              actions: [""]
          },
      ]
  }
];

const generateObjects = (placeholders) => {
  let combinations = [];
  let valueCounter = 0;

  placeholders.forEach(({ area, subareas }) => {
      subareas.forEach(({ page, actions }) => {
          actions.forEach(action => {
              combinations.push({
                  value: `item${valueCounter}`,
                  label: `${area}${page}${action}`
              });
              valueCounter++;
          });
      });
  });

  return combinations;
};


  const optionsPermissoes  = generateObjects(placeholders);

  const optionsUsuarios = [
    { value: '2item1', label: 'Bruna Meireles dos Santos' },
    { value: '2item2', label: 'Bruno Henrique Almeida Fernandes' },
    { value: '2item3', label: 'Flávio Tannus Moreira' },
    { value: '2item4', label: 'Glorinez Rodrigues Ferreira de Souza' },
    { value: '2item5', label: 'Tania Ferreira de Paula Oliveira' },
    { value: '2item6', label: 'Kelvio Silva' },
  ];


  const [checkedItemsFirstList, setCheckedItemsFirstList] = useState([]);
  const [checkedItemsSecondList, setCheckedItemsSecondList] = useState([]);


  const handleFirstListChange = (option) => {
    setCheckedItemsFirstList((prevState) =>
      prevState.includes(option)
        ? prevState.filter((item) => item !== option)
        : [...prevState, option]
    );
  };

  const handleSecondListChange = (option) => {
    setCheckedItemsSecondList((prevState) =>
      prevState.includes(option)
        ? prevState.filter((item) => item !== option)
        : [...prevState, option]
    );
  };

  return (
    <>
      {modoEdicao[1] == ["Editar valor da tabela"] && 
        <>
        <div className="area-permissoes">
        {FiltrosInfo.map((field, index) => (
          <InputEditar 
            key={index}
            type={field.type}
            label={field.label}
            content={field.content}
            tamanho={field.tamanho}
            marginRight={field.marginRight}
          />
        ))}
        <ListaCheckbox options={optionsPermissoes} onChange={handleFirstListChange} />
        </div>
        <div className="area-usuarios">
          <div className="area-usuarios-titulo">
            <InputEditar 
                type={"select"}
                label={"Usuário"}
                content={"Selecione um usuário para cadastrar"}
                tamanho={"75vw"}
                marginRight={0}
            />
            <div style={{marginTop: "2vh"}}>
            <Button 
              className="delete-button" 
              dataTooltip="Excluir Usuários"
            />
            </div>
          </div>
          <ListaCheckbox options={optionsUsuarios} onChange={handleSecondListChange} />
        </div>
        </>
    }
    </>
  )
}

export default EdicaoUsuarios
