import Input from './components/Input';
import Button from './components/Button';


import { Container, Content, Row} from './styles';
import { useState } from 'react';




const App =  () => {
const [currentNumber, setCurrentNumber] = useState(0);

const [firstNumber, setFirstNumber] = useState('0');
const [operation, setOperation] = useState ('');

const handleClear = () => {
setCurrentNumber('0')
setFirstNumber('0')
setOperation('')
};
const handleAddNumber = (num) => {
setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
};


const handleSumNumber = () => {
if(firstNumber === '0'){
  setFirstNumber(String(currentNumber));
  setCurrentNumber('0')
  setOperation('+')

}else{
const sum = Number(firstNumber) + Number(currentNumber);
setCurrentNumber(String(sum))
setOperation('')
}
};
const handleMinusNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('-');
  
  }else{
  const minu = Number(firstNumber) - Number(currentNumber);
  setCurrentNumber(String(minu));
  setOperation('');
  }
}
  const handleMultiplyNumber = () => {
if(firstNumber === '0'){
  setFirstNumber(String(currentNumber));
  setCurrentNumber('0');
  setOperation('*');

}else{
const mult = Number(firstNumber) * Number(currentNumber);
setCurrentNumber(String(mult));
setOperation('');
}

};
const handleDivisionNumber = () => {
if(firstNumber === '0'){
  setFirstNumber(String(currentNumber));
  setCurrentNumber('0');
  setOperation('/');

}else{
  const division = Number(firstNumber)/Number(currentNumber);
  setCurrentNumber(String(division));
  setOperation('');
}

};


const handleEquals = () => {
  if(firstNumber !== '0' && operation !== '' && currentNumber !== ''){
  switch(operation){
  case '+':
  handleSumNumber();
  break;
  case '-':
    handleMinusNumber(); 
  break;
  case '*':
    handleMultiplyNumber ();
  break;
  case '/':
    handleDivisionNumber();
  break; 
  default:
  break;
    }
  }
 
 
    // setFirstNumber(String(currentNumber));
    // setCurrentNumber('0')
    // setOperation('+')
    
  };


  return (
    
 <Container>

  <Content>

  <Input  value={currentNumber}/>
  <Row>
<Button label="*" onClick={handleMultiplyNumber}/>
<Button label="/" onClick={handleDivisionNumber}/>
<Button label="C" onClick={() => handleClear('0')}/>
<Button label="+" onClick={handleSumNumber}/>
</Row>

<Row>
<Button label="7" onClick={() => handleAddNumber('7')}/>
<Button label="8" onClick={() => handleAddNumber('8')}/>
<Button label="9" onClick={() => handleAddNumber('9')}/>
<Button label="-" onClick={handleMinusNumber}/>
</Row>
<Row>
<Button label="4" onClick={() => handleAddNumber('4')}/>
<Button label="5" onClick={() => handleAddNumber('5')}/>
<Button label="6" onClick={() => handleAddNumber('6')}/>
<Button label="=" onClick={handleEquals}/>

</Row>
<Row>
<Button label="1" onClick={() => handleAddNumber('1')}/>
<Button label="2" onClick={() => handleAddNumber('2')}/>
<Button label="3" onClick={() => handleAddNumber('3')}/>
<Button label="0" onClick={() => handleAddNumber('0')}/>
</Row>


  </Content>
 </Container>
  );
}

export default App;
