import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Stack } from '../Stack/Stack';
import { AboutMe } from '../AboutMe/AboutMe';
import { ProjectsHome } from '../ProjectsHome/ProjectsHome';
import { Social } from '../Social/Social';
import Contact from './../Contact/Contact';
import { ProjectPage } from '../ProjectPage/ProjectPage';
import { useEffect } from 'react';
import './App.scss'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return (
  <div className="app">
    <Header />
    
    <Routes>
      <Route path='/'
        element={<>
          <Hero />
          <AboutMe />
          <Stack />
          <ProjectsHome />
          <Social />
        </>} 
      />

      <Route path='/projects' 
        element={<>
          <ProjectPage />
          <Social />
        </>} 
      />

      <Route path='/contact' 
        element={<>
          < Contact/>
          <Social />
        </>} 
      />

      {/* will be 404 */}
      {/* <Route path='*' element={<Error404 /> } />  */}

    </Routes>
  </div>
)}

export default App
