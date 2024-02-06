import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    //SEMPRE QUE MUDAR DE ROTA O SCROLL VAI PARA O TOPO DA PAGINA
    return null;
}
