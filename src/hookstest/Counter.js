import React from 'react';
//import { useCounter } from './useCounter';
import { CounterContext } from './CounterComposed';

const Counter = () => {

    //const counter = useCounter();
    //const counter = useContext(CounterContext);

    return (
        <div className="App">
            <CounterContext.Consumer>
                { counter => 
                    <center>
                        <h1> {counter.value} </h1>
                        <input type="button" value="Incrementar" onClick={() => counter.increment() } />
                    </center>
                }
            </CounterContext.Consumer>
        </div>
    );
}

export default Counter;