import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: 'Ad infinitum',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: 'Dressed in Clarity',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    caption: 'Raven',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    caption: "I'll have a cup of Disneyland, please",
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    caption: 'Cherish',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    caption: 'Different.',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    caption: 'History was made here',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    caption: 'People come and go and walk away',
  },
];
const IndexPage = () => (
  <Layout>
    <Header />



    <article id="first" className="container box style1 right">
      <a href="/post-2" className="image fit">
        <img src={pic1} alt="" />
      </a>
      <span>Photo by <a href="https://unsplash.com/@timmossholder?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tim Mossholder</a> on <a href="https://unsplash.com/s/photos/digital?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      <div className="inner">
        <header>
          <h2>
          Where is the citizen in transformation?
          </h2>
          <h3>
          Putting the last mile first in local government 
          </h3>
        </header>
        <p>
        The work we’ve have been doing at Briarbird of late often involves engagements with local governments, many of which provide insight into their respective digital transformation programs. 
        </p>
        <p>   
        <Link to="/post-2"> Read now </Link></p>
      </div>
    </article>

    <section id="banner">
      <header>
        <h2> Lets chat! </h2>
        <h3> Call Matt </h3>

      </header>
      <p>+61407233566</p>
      <footer>

      </footer>
    </section>
    
    <article className="container box style1 left">
      <a href="/#" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Mollis posuere
            <br />
            lectus lacus
          </h2>
        </header>
        <p>
          Rhoncus mattis egestas sed fusce sodales rutrum et etiam ullamcorper.
          Etiam egestas scelerisque ac duis magna lorem ipsum dolor.
        </p>
      </div>
    </article>

    <article className="container box style1 right">
    <a href="/post-3" className="image fit">
        <img src={pic3} alt="" />
      </a>
      <div className="inner">
      <header>
      <h2> WHAT IS DIGITAL?</h2>
        <p>Someone asked me recently what I thought digital was? Whilst there are are plethora of great definitions out there already, I thought I’d have a go at making my own. </p>
        Check it out
        <Link to="/post-3"> Read now  </Link>
      </header>
      </div>
{/* 
      <div className="inner gallery">
        <Gallery
          images={ROW1_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
        <Gallery
          images={ROW2_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
      </div>    */}
    </article>
    


{/*     <article className="container box style3">
      <header>
        <h2>Nisl sed ultricies</h2>
        <p>Diam dignissim lectus eu ornare volutpat orci.</p>
      </header>
      <form method="post" action="#">
        <div className="row gtr-50">
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="col-12">
            <textarea name="message" placeholder="Message" />
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </article>

     */}
    <article className="container box style3">
      <header>
        <h2>LEAN CANVAS TEMPLATE IN VARIOUS POSTER SIZES </h2>
        <p>This starter has other elements.</p>
        <br />
        
        <Link to="/post-1"> Check them out  </Link>
      </header>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
