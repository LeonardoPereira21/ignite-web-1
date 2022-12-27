import { PencilLine } from "phosphor-react";

import s from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <img
        className={s.cover}
        src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={s.profile}>
        <img
          className={s.avatar}
          src="https://github.com/LeonardoPereira21.png"
        />
        <strong>Leonardo Pereira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine  size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
