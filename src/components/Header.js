
import '../assets/Header.css'
import logo from '../assets/Icon.png'
function Header() {

    return (
        <header className="header">
            <img src={logo} height={50} width={50}/>
             <p id="ty">vinumon</p>
          
            <nav>

                
             <div class='jojo'>
                <a href="/home" id="th">Home</a> 
                <a href="/About" id="ri"> About</a> 
                <a href="/Profile" id="ssur">Profile</a>
                <a href="/signup" id="ssur">sign up</a>
            </div>
            </nav>
            
        </header>
    );
}
export default Header;