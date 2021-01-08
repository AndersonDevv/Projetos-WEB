import './styles.css';
import  { ReactComponent as Logo} from './logoSVG.svg';


function Navbar(){
 return (
    <nav className="main-navbar">
        <Logo className="logo-image"/>
        <a href="" className="logo-text">DS Delivery</a>
    </nav>
 );
}

export default Navbar;

