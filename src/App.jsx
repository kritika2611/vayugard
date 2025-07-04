import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors pt-[4.5rem] lg:pt-[5.25rem] duration-300">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

