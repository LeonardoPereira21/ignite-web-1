import { Comment } from "./Comment";
import s from "./Post.module.css";

export function Post() {
  return (
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <img src="https://github.com/LeonardoPereira21.png" />
          <div className={s.authorInfo}>
            <strong>Leonardo Pereira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio as 11:13" dateTime="2022-05-11 08:13:36">
          Publicado há 1h
        </time>
      </header>
      <div className={s.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#"> #novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={s.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={s.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>

      </div>
    </article>
  );
}
