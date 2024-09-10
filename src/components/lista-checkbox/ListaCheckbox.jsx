import React, { useState, useEffect } from 'react';
import './ListaCheckbox.scss';

const ListaCheckbox = ({ options, onChange }) => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const initialState = {};
    options.forEach(option => {
      initialState[option.value] = false;
    });
    return initialState;
  });

  useEffect(() => {
    if (onChange) {
      const selectedItems = Object.keys(checkedItems).filter(key => checkedItems[key]);
      onChange(selectedItems);
    }
  }, [checkedItems, onChange]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [value]: checked,
    }));
  };

  return (
    <div className="checkbox-lista">
      {options.map(option => (
        <div key={option.value} className="checkbox-item">
            <input
              type="checkbox"
              id={option.value}
              value={option.value}
              checked={!!checkedItems[option.value]}
              onChange={handleCheckboxChange}
            />
          <label className="checkbox-texto" htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default ListaCheckbox;
