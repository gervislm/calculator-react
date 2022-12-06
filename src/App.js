import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Display from './components/Display';
import { useState} from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const updateInput = value => {
    setInput(input + value);
  };

  const resultCalc = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <div className='App'>
      <div className='calc-container'>
        <Display input={input}/>
        <div className='row'>
          <Button clickManage={updateInput}>7</Button>
          <Button clickManage={updateInput}>8</Button>
          <Button clickManage={updateInput}>9</Button>
          <Button clickManage={updateInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickManage={updateInput}>4</Button>
          <Button clickManage={updateInput}>5</Button>
          <Button clickManage={updateInput}>6</Button>
          <Button clickManage={updateInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickManage={updateInput}>1</Button>
          <Button clickManage={updateInput}>2</Button>
          <Button clickManage={updateInput}>3</Button>
          <Button clickManage={updateInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickManage={updateInput}>0</Button>
          <Button clickManage={updateInput}>.</Button>
          <ClearButton clearManage={() => setInput('')}>
            C
          </ClearButton>
          <Button clickManage={updateInput}>/</Button>
        </div>
        <div className='row'>
        <Button clickManage={resultCalc}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;