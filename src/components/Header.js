import React from 'react';
import Scroll from './Scroll';
import config from '../../config';
import logo from '../assets/images/logo.png';


export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>
      <img src={logo} alt="" />
        <p>{config.heading}</p>
      </header>
      <footer>
      <p>Helping businesses apply contemporary approaches to customer and product development <br></br>delivering insight, improvement to thrive</p>

        <Scroll type="id" element="banner">
   
        </Scroll>
      </footer>
    </section>
  );
}
