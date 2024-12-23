import { BrowserRouter } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './Components/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contacts';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Header />
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
