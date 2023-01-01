import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Two from './pages/Two'
import Navbar from './components/Navbar'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
      appHeader: <AppHeader shell={this} />,
      AppContent: <AppContent name='Chandler' />,
      AppFooter: <AppFooter />,
      Navbar: <Navbar toggleNav={this.toggleNav} bgColor='white'/>,
    }

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav = () => {
    this.setState({ navOpen: !this.state.navOpen });
  }

  // if nav menu is open and we click outside of it, close the nav menu.
  handleShellClick = (event) => {
    if (this.state.navOpen === true && event.target.className !== 'navBar') {
      this.setState({ 
        navOpen: false,  
      });
    }
  }

  render() {
    return (
      <div className='app-shell' onClick={this.handleShellClick}>
        {this.state.appHeader}
        {this.state.AppContent}
        {this.state.AppFooter}
        {this.state.navOpen ? this.state.Navbar : null}
      </div>
    );
  }
}

export default App;
