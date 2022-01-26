import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// components
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Stack } from '../Stack/Stack';
import { AboutMe } from '../AboutMe/AboutMe';
import { ProjectsHome } from '../ProjectsHome/ProjectsHome';
import { Social } from '../Social/Social';
import Contact from './../Contact/Contact';
import { ProjectPage } from '../ProjectPage/ProjectPage';
import { Error404 } from '../Error404/Error404';

import './App.scss'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    switch (pathname) {
      case '/':
        document.title = 'Raphaël Charousset'
        break;
      case '/projects':
        document.title = 'Mes projets'
        break;
      case '/projects':
        document.title = 'Me contacter'
        break;
      default:
        document.title = 'Raphaël Charousset - erreur 404'
        break;
    }
  }, [pathname])
  
  return (
  <div className="app">

    <Routes>
      <Route path='/'
        element={<>
          <Header />
          <Hero />
          <AboutMe />
          <Stack />
          <ProjectsHome />
          <Social />
        </>} 
      />

      <Route path='/projects' 
        element={<>
          <Header />
          <ProjectPage />
          <Social />
        </>} 
      />

      <Route path='/contact' 
        element={<>
          <Header />
          < Contact/>
          <Social />
        </>} 
      />

      <Route path='*'
        element={<Error404 />}
      /> 

    </Routes>
  </div>
)}

export default App
