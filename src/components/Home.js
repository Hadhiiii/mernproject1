
/*import '../assets/Header.css'
function Home() {
    return (
        <header className="headerhome">
            <img src="{Icon.png}" alt="doge.jpeg" className="logo" />
          
            <nav>

                
             <div class='jojo'>
                <a href="/login" id="th">Home</a> 
                <a href="" id="ri"> About</a> 
                <a href="" id="ssur">Profile</a>
            </div>
            </nav>
            
        </header>
    );
}
export default Home; */
import React from 'react';
import '../assets/Header.css'; // Importing the CSS file
import Header from './Header';



const Home = () => {
  return (
    <>
    <Header/>
    
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to My Website</h1>
        <nav className="home-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#services">Services</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="home-main">
        <section className="home-intro">
          <h2 className="intro-title">Discover Amazing Content</h2>
          <p className="intro-text">
            This is a simple home page created with React. Explore our services and get to know more about us!
          </p>
          <button className="intro-button">Get Started</button>
        </section>
      </main>
      <footer className="home-footer">
        <p className="footer-text">© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Home;