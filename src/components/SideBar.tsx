import { Avatar } from "./Avatar";
import styles from "./SideBar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/marcelonfilho.png" />

        <strong>Marcelo N. Filho</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
