import posts from "../../json/posts.json";

import "./inicio.modules.css";
import { Outlet } from "react-router-dom";
import PostCard from "../../componentes/PostCard";

export default function Inicio() {
  return (
    <main>
        <ul className= 'post' >
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>

        <Outlet/>
    </main>
    
  );
}
