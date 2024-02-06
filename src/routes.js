
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Inicio from "./paginas/inicio/index";
import SobreMim from "./paginas/sobremim/index";
import Menu from "./componentes/menu/index";
import Rodape from "./componentes/Rodape/index";
import Post from "./paginas/Post/index";
import NaoEncontrada from "./paginas/NaoEncontrada/NãoEncontrada";
import ScrollToTop from "./componentes/ScrollToTop/ScrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />
      
      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          {/* <Route path="/" element={<Inicio />}></Route> */}
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={ <div>{<NaoEncontrada/>} </div>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
/*
            
            https://cursos.alura.com.br/course/React-desenvolvendo-react-router-javaScript/task/112302

            EXEMPLO DE ROTA OUTLET
            <Route path="/a" element= {<p>Qualquer coisa</p>}></Route> 
            ASSIN FUNCIONA O OUTLET em rotas
        Na rota “/”, a estrutura a ser renderizada é:
         <Pagina Padrao>
            <Inicio/>
         </Pagina>

         Na rota “/sobremim”, a estrutura a ser renderizada é:
         <Pagina Padrao>
            <SobreMim/>
         </Pagina>
            */
