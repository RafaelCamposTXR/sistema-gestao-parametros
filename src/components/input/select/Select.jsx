import React from 'react';
import Select, {components} from 'react-select';

function SelectBox({options, placeholder, tamanho}) {



  const Styles = {
    control: (provided, state) => (
      {
      ...provided,
      //width: getWidth(tamanho),
      width: 'calc(100% + 3.3vw)',
      fontSize: "0.96rem",
      minHeight: "2px",
      height: "34px",
      paddingRight: "0vw ",
      cursor: "pointer",
      alignItems: "start",
      border: "1.8px solid #e6e7e9",
      borderRadius: "4px",
      boxShadow: "none",
      textAlign: "left",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "border 0.3s",
      borderColor: state.isFocused ? "black" : "#aaa",
      color: "#aaa",
      ':hover': {
      borderColor: state.isFocused ? "black" : "#aaa", 
    },
    }),
    indicatorSeparator: () => ({
      display: 'none', 
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      position: "relative",
      top: "-1px", 
      '&:hover': {
        color: 'black', 
      },
    }),
    option: (provided, state) => ({
      ...provided,
        padding: 0,
        textAlign: 'center',
      ':hover': {

      },
      boxShadow: "2px outset grey",
    }),
    menu: (provided) => ({
      ...provided,
      width: 'calc(100% + 3.2vw)', 
      textAlign: 'center',
      padding: 0
    }),
  }



  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span>Sem Correspondências</span>
      </components.NoOptionsMessage>
    );
  };

  return (
    <div style={{ display: 'flex', flexGrow: 1, paddingRight: "2.1vw", }}>
      <Select 
        options = {options} 
        styles = {Styles}
        placeholder = {placeholder}
        className="input-wrapper"
        components={{ NoOptionsMessage }}
      />
    </div>
  )
}

export default SelectBox
