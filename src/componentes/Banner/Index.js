/* eslint-disable jsx-a11y/alt-text */
import styles from './Banner.module.css';
import circuloColorido from '../assets/circulo_colorido.png';
import minhaFoto from '../assets/minha_foto.png'

export default function Banner (){
    return (
        <div className={styles.banner} >
            <div className={styles.apresentacao}>
                <h1 className= {styles.titulo} > Meu Olá Mundo</h1>
                <p className= {styles.paragrafo} >
                Bem-vindos(as) ao meu personal space! Eu sou Rosangela Mendes, aluna de Front-end da Alura. Sou pedagoga, pós graduada em Mídias na educação.
                Me aventurando em TI....
                <br/>
                Aqui compartilho conhecimentos adquiridos.
                </p>
            </div>
            <div className= {styles.imagens}> 
                
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto} 
                src={minhaFoto}
                alt='Foto da Rosangela'/>
            </div>
        </div>
    )
    
}