import React from 'react';
import './styles.css';
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
    const title = 'Que incrivel que você quer dar aulas.';
    const description = 'O primeiro passo é preencher esse formulário de inscrição.';
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title={title} description={description}/>
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome compoleto"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                </fieldset>
                <fieldset>
                    <legend>Sobra a aula</legend>
                    <Input name="subject" label="Matéria"/>
                    <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;