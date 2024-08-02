import React, { useState, useEffect } from 'react';
import './OptionsInput.css';

export const MultiOptionSelector = ({ label_text, given_options, onOptionsChange }) => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    if (onOptionsChange) {
      onOptionsChange(options);
    }
  }, [options, onOptionsChange]);

  const handleActivities = (option) => {
    setOptions(prevOptions =>
      prevOptions.includes(option)
        ? prevOptions.filter(p => p !== option)
        : [...prevOptions, option]
    );
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const filtered = given_options.filter(option =>
        option.name.toLowerCase().includes(value.toLowerCase()) &&
        !options.includes(option.name) // Exclude already selected options
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleOptionClick = (option) => {
    if (!options.includes(option.name)) {
      setOptions([...options, option.name]);
      setInputValue('');
      setFilteredOptions([]);
    }
  };

  const handleTagRemove = (optionToRemove) => {
    setOptions(options.filter(option => option !== optionToRemove));
  };

  return (
    <div className="options-container">
      <h2>{label_text}</h2>
      <div className="btns">
        {given_options.slice(0, 6).map((e, i) => (
          <button className='option-btn'
            type="button"
            key={i}
            onClick={() => handleActivities(e.name)}
            style={{
              backgroundImage: `url(${e.image})`,
            }}
          >
            <div className='black-box' style={{opacity:  options.includes(e.name) ? 0.8 : 0.5}}></div>

            <p className='name'>{e.name}</p>
          </button>
        ))}
      </div>
      <div className="add-new">
        <div className="box">
        <label>Add More Options: </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        </div>
        {filteredOptions.length > 0 && (
          <ul className="suggestions-list">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{ cursor: 'pointer' }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="selected-options">
        {options.map((option, index) => (
          <div key={index} className="tag">
            <div className="name">{option}</div>
            <button onClick={() => handleTagRemove(option)} style={{ marginLeft: '5px', color: 'red' }}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};





export const SimpleOptionsSelector = ({ label_text, given_options, onOptionsChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle button click to select a option
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    if (onOptionsChange) {
        onOptionsChange(option);
    }
  };

  return (
    <div className="options-container">
      <h2>{label_text}</h2>
      <div className="btns">
        {given_options.map((option, index) => (
          <button className='option-btn'
            type="button"
            key={index}
            onClick={() => handleSelectOption(option.name)}
            style={{
            
              backgroundImage: `url(${option.image})`,
            }}
          >
            <div className='black-box' style={{opacity: selectedOption === option.name ? 0.8 : 0.5}}></div>
            <p className='name'>{option.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};