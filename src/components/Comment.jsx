import { ThumbsUp, Trash } from "phosphor-react";
import s from "./Comment.module.css";

export function Comment() {
  return (
    <div className={s.comment}>
      <img src="https://github.com/diego3g.png" alt="" />

      <div className={s.commentBox}>
        <div className={s.commentContent}>
          <header>
            <div className={s.authorAndTime}>
              <strong>Diego</strong>
              <time title="11 de maio as 11:13" dateTime="2022-05-11 08:13:36">
                Cerca de 1h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Leo, parabens!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
