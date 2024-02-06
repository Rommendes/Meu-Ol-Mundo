import { Route, Routes, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../../componentes/PostModelo";
import NaoEncontrada from "../NaoEncontrada/NãoEncontrada";
import style from "../Post/Post.module.css";
import PostCard from "../../componentes/PostCard";
import PaginaPadrao from "../../componentes/PaginaPadrao";
// import Markdown from "react-markdown";


export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
     .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4); //deixamos 4 posts na tela
  
  //console.log(postsRecomendados);

  //sort => compara os post w coloca t em ordem decrescente

  //RECEBO post COMO PARÂMETRO DA FUNÇÃO e retorno => SE POST.ID DIFERENTE DE PARAMETROS.ID: true ou false

  // console.log(post);
  console.log(posts)


  return (
    <Routes>
        <Route  path="*" element={<PaginaPadrao/>}>
            <Route index element={
                 <PostModelo
                 FotoCapa={`/assets/posts/${post.id}/capa.png`}
                 titulo={post.titulo}
               >
                {/* <div className=".post-markdown-container">
                  <Markdown > */}
                    {post.texto}
                {/* </Markdown>
                </div> */}
                 gh
                 <h2 className={style.tituloOutrosPosts}>
                   Outros posts que você pode gostar:
                 </h2>
         
                 <ul className={style.postsRecomendados}>
                   {postsRecomendados.map((post) => (
                     <li key={post.id}>
                       <PostCard post={post} />
                     </li>
                   ))}
                 </ul>
                 
               </PostModelo>
            }/>
        </Route>
     
    </Routes>


    //Podemos usar Editor Markdown:
    //<https://pandao.github.io/editor.md/en.html> para editar o texto e após passar para o Json
    //INSTALAR o markdown => escrever npm install react-markdown
  );
}
