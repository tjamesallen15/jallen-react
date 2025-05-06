import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'; 
import { Provider } from 'react-redux';
import './index.css';
import App from './App.tsx';
import Footer from './components/org/jallen/footer/Footer.tsx';
import Header from './components/org/jallen/header/Header.tsx';
import Resume from "./components/org/jallen/pages/Resume.tsx";
import Projects from "./components/org/jallen/pages/Projects.tsx";
import StairTransition from "./components/org/jallen/transition/StairTransition.tsx";
import PageTransition from "./components/org/jallen/transition/PageTransition.tsx";
import titleSliceReducer from "./data/state/titleSlice.ts";

const store = configureStore({
  reducer: {
    title: titleSliceReducer
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <StairTransition />
      <Header />
      <PageTransition>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/resume' element={<Resume />} />       
            <Route path='/projects' element={<Projects />} /> 
          </Routes>
        </BrowserRouter>
      </PageTransition>
      <Footer />
    </Provider>
  </StrictMode>,
)
