import React from 'react'
import { push } from 'connected-react-router'
import { useSelector, useDispatch } from 'react-redux'
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    incrementBy100
} from '../../redux/actions/counter';

const Home = () => {
    const dispatch = useDispatch();
    const { count, isIncrementing, isDecrementing } = useSelector(({ counter }) => ({
        count: counter.count,
        isIncrementing: counter.isIncrementing,
        isDecrementing: counter.isDecrementing
    }));

    return (
    <div>
        <h1>Home</h1>
        <p>Count: {count}</p>
        <p>
            <button onClick={() => { dispatch(increment()); }}>Increment</button>
            <button onClick={() => { dispatch(incrementBy100(100)); }}>Increment 100</button>
            <button onClick={() => { dispatch(incrementAsync()); }} disabled={isIncrementing}>Increment Async</button>
        </p>
        <p>
            <button onClick={() => { dispatch(decrement()); }}>Decrementing</button>
            <button onClick={() => { dispatch(decrementAsync()); }} disabled={isDecrementing}>Decrement Async</button>
        </p>
        <p>
            <button onClick={() => dispatch(push('/about-us'))}>Go to about page via redux</button>
        </p>
    </div>
);
}

export default Home;