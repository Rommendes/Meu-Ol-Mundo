import { Outlet } from "react-router-dom"

import Banner from "../Banner/Index"
import { Children } from "react"

export default function PaginaPadrao ({Children}){
    return (
        <main>
            <Banner/>.

            <Outlet/>
            {/* Redenrizar conteúdos das rotas aqui  OUTLET */}
            {Children}
        </main>
    )
}