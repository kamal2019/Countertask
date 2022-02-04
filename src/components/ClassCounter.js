import React, { Component } from 'react';
import Button from '@mui/material/Button';

class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state= {
            count: 0
        }
    }
    initialState = 0;

    incrementCount=()=>{
        this.setState( prevCount=>{
            return{
                count: prevCount.count+1
            }
        })
        }
    resetCount=()=>{
        this.setState(prevCount=>{
            return{
                count:this.initialState
            }
        })
    }
    decrementCount=()=>{
        this.setState(prevCount=>{
            return{
                count:prevCount.count -1
            }
        })
    }

  render() {
    return <div className='Screen'>
        <h2>Count: {this.state.count}</h2>
        <div className='button'>
            <Button onClick={this.incrementCount} color="success" variant='contained'>Increment</Button>
            <Button onClick={this.resetCount} color="success" variant='contained'>Reset</Button>
            <Button onClick={this.decrementCount} color="success" variant='contained'>Decrement</Button>
        </div>
    </div>;
  }
}

export default ClassCounter;
