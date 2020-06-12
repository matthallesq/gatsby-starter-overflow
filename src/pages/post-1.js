import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Link } from 'gatsby';


const IndexPage = () => (
  <Layout>
    <article className="container box style3">
      <header>
        <h2>LEAN CANVAS TEMPLATE IN VARIOUS POSTER SIZES</h2>
        <p>If you're looking to run some business model workshops using lean canvas and like me you still like using paper and post-it notes, try out these A0, A1 & A2 sized posters. 
</p>
      </header>
      <section>
        <p>

          <Link to="/lean-model-canvas-a0.pdf"> Lean Model Canvas A0</Link>
          <Link to="/lean-model-canvas-a1.pdf"> Lean Model Canvas A1</Link>
          <Link to="/lean-model-canvas-a2.pdf"> Lean Model Canvas A2</Link>

        </p>
      </section>
  
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
