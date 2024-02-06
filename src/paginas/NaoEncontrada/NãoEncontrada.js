import './NaoEncontrada.modules.css';
import erro404 from '../../assets/erro_404.png';
import BotaoPrincipal from '../../componentes/BotaoPrincipal/botao';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada(){
    
    const navegar = useNavigate();
    return(
        <>
        <div className='conteudoContainer'  >
            <span className= 'texto404' > 404 </span>
            <h1 className='titulo'
             > Ops! Página não encontrada</h1>
            
            <p className='paragrafo'>Tem certeza de que era isso que você estava procurando?<br/> Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>
            
            <div 
            className='styles.botaoContainer' 
            onClick= {()=> navegar(-1)} >
            {/* -1 faz retornar para a pagina de inicio */}
                <BotaoPrincipal tamanho="paginaNaoEncontrada" >
                    Voltar
                </BotaoPrincipal>
            </div>
            
        
        </div>
            <img
                className='imagemCachorro'
                src= {erro404}
                alt='Cachorro de óculos'
            />
            <div >
           

            
        </div>
        </>
    )
}