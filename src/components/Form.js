// FeedbackForm.js

import React, { useState } from 'react';
import './Form.css'; 
const Form = () => {
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [radioValue, setRadioValue] = useState('');
  const [textBox1, setTextBox1] = useState('');
  const [textBox2, setTextBox2] = useState('');

  const handleCheckboxChange = (value) => {
    const updatedValues = checkboxValues.includes(value)
      ? checkboxValues.filter((item) => item !== value)
      : [...checkboxValues, value];
    setCheckboxValues(updatedValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data (replace with your desired action)
    console.log({
      date,
      day,
      dropdownValue,
      checkboxValues,
      radioValue,
      textBox1,
      textBox2,
    });

    // Reset form state
    setDate('');
    setDay('');
    setDropdownValue('');
    setCheckboxValues([]);
    setRadioValue('');
    setTextBox1('');
    setTextBox2('');
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>

      <label>
        Day:
        <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
      </label>

      <label>
        Dropdown:
        <select value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>

      <label>
        Checkboxes:
        <div>
          <label>
            <input
              type="checkbox"
              value="checkbox1"
              checked={checkboxValues.includes('checkbox1')}
              onChange={() => handleCheckboxChange('checkbox1')}
            />
            Checkbox 1
          </label>
          <label>
            <input
              type="checkbox"
              value="checkbox2"
              checked={checkboxValues.includes('checkbox2')}
              onChange={() => handleCheckboxChange('checkbox2')}
            />
            Checkbox 2
          </label>
          <label>
            <input
              type="checkbox"
              value="checkbox3"
              checked={checkboxValues.includes('checkbox3')}
              onChange={() => handleCheckboxChange('checkbox3')}
            />
            Checkbox 3
          </label>
        </div>
      </label>

      <label>
        Radio buttons:
        <div>
          <label>
            <input
              type="radio"
              value="radio1"
              checked={radioValue === 'radio1'}
              onChange={() => setRadioValue('radio1')}
            />
            Radio 1
          </label>
          <label>
            <input
              type="radio"
              value="radio2"
              checked={radioValue === 'radio2'}
              onChange={() => setRadioValue('radio2')}
            />
            Radio 2
          </label>
        </div>
      </label>

      <label>
        Textbox 1:
        <input type="text" value={textBox1} onChange={(e) => setTextBox1(e.target.value)} />
      </label>

      <label>
        Textbox 2:
        <input type="text" value={textBox2} onChange={(e) => setTextBox2(e.target.value)} />
      </label>

      <button type="submit">Submit Feedback</button>
    </form>
    </div>
  );
};

export default Form;
