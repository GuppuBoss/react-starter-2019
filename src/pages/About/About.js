import React from 'react';
import { useSelector } from 'react-redux';
import "./About.scss";
const About = () => {
    const { count } = useSelector(({ counter }) => ({
        count: counter.count
    }));
    return (
    <div>
        <h1>About Us { count }</h1>
        <p>Hello Medium!</p>
    </div>
);
    }

export default About;