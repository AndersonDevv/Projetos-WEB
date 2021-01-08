import './styles.css';
import  { ReactComponent as Logo} from './Logotipo.svg';


function Navbar(){
 return (
    <nav className="main-navbar">
        <Logo className="logo-image"/>
        <a href="sss" className="logo-text"></a>
    </nav>
 );
}

export default Navbar;

