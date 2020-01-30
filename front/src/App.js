import React from 'react';
import RgForm from './RgForm';
import RgFormcom from './RgFormcom';
import Navbar from './Navbar';
import Landing from './Landing';
import { LanguageProvider } from './contexts/Language.context';

export default function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navbar />
        <Landing />
        {/* <RgForm />
        <RgFormcom /> */}
      </LanguageProvider>
    </div>
  );
}
