import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber, click }) => {
  
    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <br />
          <p>The Number of times the increment/decrement buttons have been clicked: <span>{click}</span></p>
          <input type="text" onChange={
            event => onInputNumberChange(
              event.target.value)} 
          value={numberInputted}/>
          <button onClick={onInputNumber}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;