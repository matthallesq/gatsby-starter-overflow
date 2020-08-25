import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>
        <h1>{config.authorName}</h1>
        <p>{config.heading}</p>
      </header>
      <footer>
      <p>Helping businesses adopting contemporary approaches to customer and product development, delivering the insight, improvement and value to help thme thrive.</p>

        <Scroll type="id" element="banner">
   
        </Scroll>
      </footer>
    </section>
  );
}
