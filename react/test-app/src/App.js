import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Two from './pages/Two'
import Navbar from './components/Navbar'
import { FaSkull } from 'react-icons/fa'

function AppHeader() {
  return (
    <header className='app-header'>
      <FaSkull className='header-icon' onClick={() => { this.changeNavBarShowing() }} />
      <h1>A Fantastic Website</h1>
    </header>
  );
}


function AppContent(props) {
  return (
    <div className='app-content'>
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appShell: ([
        <AppHeader />,
        <AppContent name='Chandler' />,
        <AppFooter />,
        <Navbar buttonClick={this.changeNavBarShowing} />,
      ]),
      navBarShowing: false,
    }
  }

  changeNavBarShowing() {
    this.setState({ navBarShowing: !this.navBarShowing })
    console.log(this.state.navBarShowing)
  }

  render() {
    return (
      <div className='app-shell'>
        {this.state.appShell[0]}
        {this.state.appShell[1]}
        {this.state.appShell[2]}
        {this.state.appShell[3]}
      </div>
    );
  }
}

export default App;
