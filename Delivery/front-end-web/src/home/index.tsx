import './styles.css';
import { ReactComponent as MainImage} from './padrao-entrega-home.svg';
function Home(){
 return (
    <div className="home-conteiner">
        <div className="home-content">
            <div className="home-actions">
                <h1 className="home-title">
                    Faça seu pedido <br/> 
                    que entregamos <br/> 
                    para você!!!
                </h1>
                <h3 className="home-subtitle">
                    Escolha o seu pedido e em poucos minutos <br/>
                    levaremos na sua porta
                </h3>
                <a href="www" className="home-btn-order">FAZER pedido</a>
            </div>
            <div className="home-image">
               <MainImage />
            </div>
        </div>   
    </div>
   
 );
}

export default Home;

