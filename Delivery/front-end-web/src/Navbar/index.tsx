import './styles.css';
import  { ReactComponent as Logo} from './Logotipo.svg';
import { Link } from 'react-router-dom';


function Navbar(){
 return (
    <nav className="main-navbar">
        <Link to="/home" className="logo-text"><Logo className="logo-image"/></Link>
    </nav>
 );
}

export default Navbar;

