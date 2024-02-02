import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [input,setinput] = useState("")
  let [val , setval] = useState("")
  let [sign , setsing] = useState("")
  let [lastval ,setlastval] = useState("");
  let [delval , setdelval] = useState("")

  const  data = (y) => {
    setinput(input + y);
  }
  const caldata = (d) => {
    setval(input)
    setinput("")
    setsing(d)
  }
  const lastvalue = () => {
    const lastval = input;
    switch (sign)
    {
      case '1':
				setinput(String(parseFloat(val) + parseFloat(lastval)));
				break;
      case '2':
        setinput(String(parseFloat(val) - parseFloat(lastval)));
        break;
      case '3':
        setinput(String(parseFloat(val) * parseFloat(lastval)));
        break;
      case '4':
        if(parseFloat(lastval)===0){
          setinput('can not divided by 0')
        }
        else{
          setinput(String(parseFloat(val) / parseFloat(lastval)));
        }
        break;
      case '5':
        setinput(String(parseFloat(val) % parseFloat(lastval)));
        break;
      case '6':
        setinput(String(parseFloat(val) + parseFloat(lastval)));
        break;
      default:
        setinput("Error");
    }
  }
  const clr = () => {
    setinput("");
  }
  const rdata = () => {
    setdelval(input);
    setinput("");
  }

  return (
    <center>
    <div className="App">
          <div className="cal">
            <div className="cal_1">
                <input type="text" value={input}></input>
            </div>
            <div className='cal_3 sign'>
                <input type='button' value='AC' onClick={clr}></input>
                <input type='button' value='C' onClick={rdata}></input>
                <input type='button' value='%' onClick={() => caldata('5')}></input>
                <input type='button' value='/' onClick={() => caldata('4')}></input>
            </div>
            <div className='cal_3'>
                <input type='button' value='7' onClick={() => data('7')}></input>
                <input type='button' value='8' onClick={() => data('8')}></input>
                <input type='button' value='9' onClick={() => data('9')}></input>
                <input type='button' value='*' onClick={() => caldata('3')}></input>
            </div>
            <div className='cal_3'>
                <input type='button' value='4' onClick={() =>data('4')}></input>
                <input type='button' value='5' onClick={() =>data('5')}></input>
                <input type='button' value='6' onClick={() =>data('6')}></input>
                <input type='button' value='-' onClick={() => caldata('2')}></input>
            </div>
            <div className='cal_3'>
                <input type='button' value='1' onClick={() =>data('1')}></input>
                <input type='button' value='2' onClick={() =>data('2')}></input>
                <input type='button' value='3' onClick={() =>data('3')}></input>
                <input type='button' value='+' onClick={() => caldata('1')}></input>
            </div>
            <div className='cal_3'>
                <input type='button' value='00' onClick={()=>{data('00')}}></input>
                <input type='button' value='0' onClick={()=>{data('0')}}></input>
                <input type='button' value='.' onClick={()=>{data('')}}></input>
                <input type='button'  value='=' onClick={lastvalue}></input>
            </div>
          </div>
    </div>
    </center>
  );
}
export default App;