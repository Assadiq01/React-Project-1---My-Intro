import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" /><h1>MyReact - Project 1</h1>
      </nav>
      <MainContent />
      <Footer />
    </div>
  
  );
}

function MainContent () {
  return (
    <div className='main-content'>
      <h1>This is my First React App</h1>
      <ul>
        <li>My Name is Abubakar Ashiru Yunusa.</li>
        <li>I'm Learning React from scratch.</li>
        <li>i want to Transform my Career from Backend Developer to Fullstack Developer.</li>
        <li>I started this Development journey (React) on 1st April 2024.</li>
      </ul>
    </div>
  )
}

function Footer () {
  return (
    <div className="footer">
      <small>All Right Reserved - Assadiq Codes</small>
    </div>
  )
}


export default App;


