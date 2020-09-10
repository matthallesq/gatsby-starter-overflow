import React from 'react';
import Layout from '../components/Layout';
import HeaderMin from '../components/HeaderMin';
import Footer from '../components/Footer';
import pic5 from '../assets/images/pic05.jpg';
import { Link } from 'gatsby';


const IndexPage = () => (
  <Layout>
        <HeaderMin />

    <article className="container box style3">
      <header>
        <h2>Re-imagining how we care for our fur friends</h2>
        <p>December 2, 2015</p>
        <img src={pic5} alt="" />

        </header>
     
        <section>

        <p>At vetchat our mission is to reimagine the way we care for our pets.</p>

        <p>In the not too distant future, telehealth (health care over telecommunication services such as phone or internet) will be such an integral part of your healthcare experience that telehealth will simply just be called healthcare.</p>

        <p>The global telehealth market is predicted to grow at 24% CAGR to 2020, forecasted to be worth $6.5 billion US (according to marketwatch.com, August 2015), mostly due to improvements in telecommunication infrastructure, technology advancements (such as personal medical devices), rising healthcare costs, and the awareness of the benefits of telehealth.</p>

        <p>The bottom line is that the healthcare industry will undergo a fundamental shift from volume-based businesses to value based ones – in other words, customers expect and will increasingly demand value and complete care, anytime and anywhere.</p>

        <p>As many chronic health conditions continue to rise more and more of us are driven to monitor and improve ourselves whether it is our physical or mental health. We are becoming more proactive in how we approach and manage our health. It’s well established that pet’s have a positive impact on our health,  so it’s natural we seek the the same improvements for our fur friends as well.</p>

        <p>Pet ownership is high in Australia, 39% of households have a dog (estimated at 4.2m dogs) and 29% households have a cat (estimated at 3.3m cats). With these numbers it’s not surprising that caring for them is big business and contributes an estimated $8 billion to the Australian economy, with almost 20% of that spent on veterinary services alone. </p>

<h3>Towards an ecosystem centered on wellness</h3>
<p>As is the case with our current health care system, the pet care eco system is vast and seemingly fragmented. Consumers are often left piecing together holistic solutions for themselves. It seems a new wave of digital platforms are changing this in health care, with a myriad of start ups looking to deliver new service models/platforms that glue providers together around the consumer. So why shouldn’t it be the same for our pet’s too?  </p>

<h3>Your last visit to the vet</h3>
<p>Let’s face it going to the vet is not an easy task, if we can avoid it we will, and often (and unknowingly) that decision ends up costing us more in the long term. In our market research study, over 70% of pet owners have delayed a visit to the veterinarian due to cost, time/scheduling and distance to a clinic. </p>

<p>Initially more often than not we defer to dr. google which is useful, but can also be dangerous when taking unvetted advice from non expert or local sources, especially with time sensitive issues.</p>

<p>So what was your experience like the last time you needed to visit the vet? From deciding if you need to go through to safely arriving back home. Outcomes aside, pretty traumatic in many cases!</p>

<p>Our research showed that across the board the level of satisfaction was high; vets in Australia are doing a great job! They are absolutely the trusted experts and advisors we expect them to be.  However, pet owners have their gripes and the biggest ones are:</p>

<ul>
<li>Access – availability of experts and transparency in sharing information</li>
<li>Fair value – not knowing what to expect at the end of a visit, seeing it as exorbitant when compared to human healthcare (of course, veterinarian’s aren’t subsidised and have high overheads for operating a clinic)</li>
<li>Technical difficulty – confining and transporting pet in a car and at a clinic</li>
<li>Time – travel, time away for work and waiting. </li>
</ul>
<h3>Introducing vetchat</h3>

<p>At vetchat our mission is to reimagine the way we care for our pets through improved access to advice and information from trusted experts, and facilitating a natural conversation that happens at a time when you need it rather than when you can get it.  </p>

<p>By removing the barriers for clients to seek veterinary advice we can shift the focus to optimising wellbeing and early intervention rather than treating illness alone.  </p>

<p>I guess that’s why we want you to consider vetchat.com.au next time your wondering if everything’s alright with your furry friend</p>

<p>chat soon. Matt Hall & Dr Claire Jenkins at vetchat.com.au </p>

<p>Sources</p>

<p>Animal Health Alliance – Pet Ownership in Australia 2013</p>
<p>Marketwatch.com</p>
          
      
      </section>
  
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
