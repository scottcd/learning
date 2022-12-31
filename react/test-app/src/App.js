import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Two from './pages/Two'
import Navbar from './components/Navbar'
import pic from './pic.jpg';

function AppHeader() {
  return (
    <header className='app-header'>
      <img className='header-image' src={pic}/>
      <h1>A Fantastic Website</h1>
    </header>
  );
}


function AppContent(props) {
  return (
    <div className='app-content'>
      <Navbar/>
      <Routes>
        <Route path="/" element={Home()} exact />
        <Route path="/two" element={Two()} />
      </Routes>
    </div>
  );
}

function AppFooter() {
  return (
    <footer className='app-footer'>
      site footer
    </footer>
  );
}

function App() {
  // header
  const headerSection = <AppHeader/>;
  // content
  const contentSection = <AppContent name='Chandler'/>
  // footer
  const footerSection = <AppFooter/>;
  
  // combine header, content, footer for app shell
  const appShell = (
      <div className='app-shell'>
        {headerSection}
        {contentSection}
        {footerSection}
      </div>
    );

  return ( appShell );
}

export default App;
