import React from 'react';
import Select, {components} from 'react-select';

function SelectBox({options, placeholder}) {

  const Styles = {
    control: (provided, state) => ({
      ...provided,
      width: "18vw",
      minHeight: "2px",
      height: "34px",
      padding: "0",
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
      ':hover': {

      },
      boxShadow: "2px outset grey",
    })
  }



  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span>Sem Correspondências</span>
      </components.NoOptionsMessage>
    );
  };

  return (
    <>
      <Select 
        options = {options} 
        styles = {Styles}
        placeholder = {placeholder}
        className="input-wrapper"
        components={{ NoOptionsMessage }}
      />
    </>
  )
}

export default SelectBox
