import React, {useState} from 'react'
import Child from './Child'

function Parent() {
  const [inputValue, setinputValue] = useState('');

  const handleTextChange = (event) => {
    setinputValue(event.target.value);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <h5>child component text is: {inputValue}</h5>
      <Child onTextChange={handleTextChange} />      
    </div>
  );
}

export default Parent;