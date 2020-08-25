import React from 'react';

import config from '../../config';

export default function HeaderMin({ title, heading, avatar }) {
  return (
    <section>
      <header>
        <h1>{config.authorName}</h1>
      </header>
    </section>
  );
}
