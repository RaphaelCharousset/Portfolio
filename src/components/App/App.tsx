import { Route, Routes } from 'react-router-dom';
import './App.scss'
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';

const App = () => (
  <div className="app">
    <Header />
    
    <Routes>

      <Route path='/' element={<Hero />} />
      {/* <Route path='/projects' element={<Nav />} /> */}
      {/* <Route path='/contact' element={<Nav />} /> */}

      {/* will be 404 */}
      {/* <Route path='*' element={<Error404 /> } />  */}

    </Routes>
  </div>
)

export default App
