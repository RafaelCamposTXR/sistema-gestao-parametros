import React from 'react';
import Select from 'react-select';

function Select({options, styles}) {
  return (
    <>
      <Select options = {options} styles = {styles}/>
    </>
  )
}

export default Select
