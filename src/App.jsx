import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import s from "./App.module.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora vel suscipit quia dolore, aliquid, explicabo odit voluptatum sunt inventore dolorem beatae harum quisquam perferendis mollitia quae voluptates voluptatibus officia?"
          />
          <Post author="Gabriel" content=" Novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
