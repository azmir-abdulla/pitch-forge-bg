import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { 
  AboutSection,
  ServicesGrid, 
  ITSolutionsSection,
  TechShowcase, 
  Stats, 
  OurClients, 
  TeamShowcase,
  Testimonials, 
  FAQ, 
  PortfolioShowcase, 
  InsightsPreview,
  FinalCTA
} from '../components/Sections';
import { FAQS } from '../data/mockData';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <Layout>
      <Helmet>
        <title>PitchForge Technologies | Next-Generation IT Solutions</title>
        <meta name="description" content="PitchForge is a global software power-house building resilient, high-speed infrastructures for the next era of enterprise technology." />
        <meta property="og:title" content="PitchForge Technologies | Next-Generation IT Solutions" />
        <meta property="og:description" content="Global software power-house building resilient, high-speed infrastructures for the next era of enterprise technology." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <TechShowcase />
        <AboutSection />
        <ServicesGrid />
        <ITSolutionsSection />
        <Stats />
        <PortfolioShowcase limit={2} />
        <OurClients />
        <TeamShowcase />
        <Testimonials />
        <InsightsPreview />
        <FAQ faqs={FAQS} />
        <FinalCTA />
      </main>
      <Footer />
    </Layout>
  );
};

export default HomePage;
