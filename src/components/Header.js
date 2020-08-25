import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>
        <h1>{config.authorName}</h1>
        <p>{config.heading}</p>
        <p>I relish the opportunity to help businesses adopting contemporary approaches to customer and product development, delivering insight, improvement and value. I draw on pragmatic experience in strategy, design and delivery within digital transformation programs as well as creating new products for consumers and business.</p>
      </header>
      <footer>
        <Scroll type="id" element="banner">
   
        </Scroll>
      </footer>
    </section>
  );
}
