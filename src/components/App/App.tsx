import { Route, Routes } from 'react-router-dom';
import './App.scss'
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Stack } from '../Stack/Stack';
import { AboutMe } from '../AboutMe/AboutMe';
import { ProjectsHome } from '../ProjectsHome/ProjectsHome';
import { Social } from '../Social/Social';

const App = () => (
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

      {/* <Route path='/projects' element={<Nav />} /> */}
      {/* <Route path='/contact' element={<Nav />} /> */}

      {/* will be 404 */}
      {/* <Route path='*' element={<Error404 /> } />  */}

    </Routes>
  </div>
)

export default App
