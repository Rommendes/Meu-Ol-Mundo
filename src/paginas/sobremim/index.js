import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import Styles from "./SobreMim.module.css";
import FotoSobreMim from "../../assets/minha_foto.png";

export default function SobreMim() {
  return (
    <PostModelo
      FotoCapa= {fotoCapa}
      titulo= "Sobre mim" teste
      >
      
      <h3 className={Styles.subtitulo}>Olá eu sou Rosangela</h3>
      
      <img 
      src={FotoSobreMim} 
      alt="Foto de Rosangela, cabelo colorido, óculos, sorrindo"
      className={Styles.fotoSobreMim}
      />

      <p  className= {Styles.paragrafo}>
        Oi, tudo bem? Eu sou aluna de Front-end   na Alura e estou feliz de te ver por aqui.
      </p>
        
      <p className= {Styles.paragrafo}>
          Minha história com programação começou na Universide Federal de Santa Maria UFSM, quando fiz pós-graduação em Mídias na educação.
      </p>
    
      <p className= {Styles.paragrafo}>
        Mas anterior a isso, quando cursava Pedagogia comecei a ter contato com produções que dependiam de programas do próprio computador e isso despertou minha curiosidade. Porém achei que não tinha condições de aprender uma linguagem de programação.
      </p>
        
      <p className= {Styles.paragrafo}>
        Ao me aposentar, percebi que precisava fazer algo diferente e que fosse algo que eu gostasse. Logo, resolvi fazer um curso de HTML5 e não parei, fiz lógica da programação, os básicos em CSS e JavaScript. Atualmente estou fazendo uma formação em React. E continuo apaixonada por esse desafio!
    </p>
      
    </PostModelo>
  );
}
