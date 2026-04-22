/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'motion/react';

// Context
import { ThemeProvider } from './context/ThemeContext';

// Components
import CustomCursor from './components/CustomCursor';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import InsightsPage from './pages/InsightsPage';
import DetailsPage from './pages/DetailsPage';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <CustomCursor />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:id" element={<DetailsPage type="portfolio" />} />
              <Route path="/services/:id" element={<DetailsPage type="service" />} />
              <Route path="/products/:id" element={<DetailsPage type="product" />} />
              <Route path="/insights" element={<InsightsPage />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
