import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header";
import ScraperSection from "./components/ScraperSection";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <ScraperSection />
      </main>
      <Footer />
    </>
  );
}

export default App;