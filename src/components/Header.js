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
      <p>I relish the opportunity to help businesses adopting contemporary approaches to customer and product development, delivering insight, improvement and value.</p>

        <Scroll type="id" element="banner">
   
        </Scroll>
      </footer>
    </section>
  );
}
