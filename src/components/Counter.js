import {React,useState} from 'react';
import Button from '@mui/material/Button';

function Counter() {

    const initialCount = 0;
    const [count, setCount] = useState(0);

  return <div className='Screen'>

      <h2>Count :{count}</h2>
      <div className='button'>
      <Button onClick={()=>setCount(prevcount => prevcount+1)} color="success" variant='contained'>Increment</Button>
      <Button onClick={()=>setCount(initialCount)} variant="contained" color="success">Reset</Button>
      <Button onClick={()=>setCount(prevcount => prevcount-1)} color="success" variant='contained'>Decrement</Button>
      </div>
  </div>;
}

export default Counter;
