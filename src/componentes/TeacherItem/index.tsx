import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/60676044?s=460&u=38f76189acd618914d11d5972a427fe6818502ef&v=4" />
                <div>
                <strong>Vinicius Ribeiro</strong>
                <span>Desenvolvedor Front-end</span>
                </div>
            </header>
            <p>
                Melhor desenvolvedor front-end da sua casa.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
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