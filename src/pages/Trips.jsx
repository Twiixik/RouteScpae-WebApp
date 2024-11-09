import React from 'react';
import logo from '../assets/logo.png';
import { MdPushPin } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";


export default function Trips() {
    return (
        <section className="page-content">
            <header className="logo-header">
                <img src={logo} alt="RouteScape Logo" className="logo" />
            </header>
            <section className='Main-Text-Trips'>
                <h1><MdPushPin />Your Trips</h1>
                <p>No trips yet! Once you start planning or join a trip, your adventures will appear here.</p>
            </section>
            <section className='Buttons-Paragprahs'>
                <h1>Or you can choose from:</h1>
                <p>Get a personalized trip planned just for you!</p>
                <button className='Buttons-For-Trips'>Plan It For Me<IoIosArrowForward /></button>
                <p>Plan your dream trip by yourself!</p>
                <button className='Buttons-For-Trips-NA'>Plan a Trip<IoIosArrowForward /></button>
                <p>Explore different trips you can join!</p>
                <button className='Buttons-For-Trips'>Join a Trip<IoIosArrowForward /></button>
            </section>
        </section>
    );
}
