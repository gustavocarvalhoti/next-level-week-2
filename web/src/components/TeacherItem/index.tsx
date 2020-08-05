import React from 'react';
import './styles.css';
import whatsIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQFJlEfvKl5Z8w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=9SfRNhOVt7tuV_vwhAy095P83MSZa38Ra8Jk6MEg8PY"
                    alt="Gustavo Carvalho"
                />
                <div>
                    <strong>Gustavo Carvalho</strong>
                    <span>Vue</span>
                </div>
            </header>
            <p>
                Sou desenvolvedor a algum tempo, tenho uma boa experiência com Java e Frameworks
                JavaScript. <br/>
                Gosto muito de aprender, tenho espirito de equipe, visto a camisa do time e sou proativo.<br/>
                Meu diferencial? Sou um multiplicador de conhecimento, juntos aprendemos mais.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 120,00</strong>
                </p>
                <button type="button">
                    <img src={whatsIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;