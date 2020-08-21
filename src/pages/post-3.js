import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Link } from 'gatsby';


const IndexPage = () => (
  <Layout>
    <article className="container box style3">
      <header>
        <h2> WHAT IS DIGITAL?</h2>
  
        </header>
     
        <section>

        <p>Someone asked me recently what I thought digital was? Whilst there are are plethora of great definitions out there already, I thought I’d have a go at making my own. </p>

        <p>Digital is a structural and generational shift towards businesses and people being interconnected (and arguably interdependent) with technology.</p>

        <p>This can be broadly characterised by:</p>
<ul>

<li>Everyone & everything increasingly being interconnected through the internet in someway</li>
<li>New thinking & ways of doing things that has wide ranging implications for governments, economies. markets and society in general</li>
<li><New business and operating models that deliver new products and services enabled through this interconnectivity </li>

</ul>

<p>In the business context digital is creating new opportunities (and threats) </p>

<ul>
<li> Providing levers for growth & cost reduction</li> 
<li> Removal of barriers to entry where traditional businesses (and their business models) are vulnerable to being trumped by new market entrants</li>
<li> New ways of engaging with customers (often in a customer centric way) </li> 
<li> Brand risk from increased transparency and security threats</li> 
<li> New analytics to aid (or sometimes impede) decision making</li> 
</ul>

<p>Well thats it, in a nutshell, which really begs a further question…what isn’t digital? </p>
      
      </section>
  
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
