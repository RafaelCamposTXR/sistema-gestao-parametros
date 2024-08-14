import React from 'react';
import InputEditar from '../InputEditar';

function EditarFiltros() {
  return (
    <>
      <InputEditar 
          label="Tipo de Informação" 
          type="select"
      />
      <InputEditar 
          label="Script" 
      />
    </>
  )
}

export default EditarFiltros
