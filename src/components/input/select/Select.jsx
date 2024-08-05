import React from 'react';
import Select from 'react-select';

function SelectBox({options}) {

  const Styles = {
    control: (provided) => ({
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
    }),
    option: (provided) => ({
      ...provided,

    })
  }

  return (
    <>
      <Select 
        options = {options} 
        styles = {Styles}
      />
    </>
  )
}

export default SelectBox
