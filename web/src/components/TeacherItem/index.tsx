import React from "react";

import PageHeader from "../../components/PageHeader";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://thiscatdoesnotexist.com/" alt="Foto do perfil" />
        <div>
          <strong>Vanessa Schenkel</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        IAJSDIAOSJDSIAOJD
        <br />
        <br />
        JISAODJSADJASDASDOISAJDIO
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
