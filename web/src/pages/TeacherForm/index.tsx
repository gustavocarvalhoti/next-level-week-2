import React, {useState} from 'react';
import './styles.css';
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
    const title = 'Que incrivel que você quer dar aulas.';
    const description = 'O primeiro passo é preencher esse formulário de inscrição.';

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''},
    ])

    function addNewScheduleItem() {
        const newSchedule = {week_day: 0, from: '', to: ''};
        setScheduleItems([
            ...scheduleItems,
            newSchedule
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title={title} description={description}/>
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome compoleto"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                    <TextArea name="bio" label="Biografia"/>
                </fieldset>
                <fieldset>
                    <legend>Sobra a aula</legend>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Inglês', label: 'Inglês'},
                            {value: 'Química', label: 'Química'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Português', label: 'Português'},
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                    </legend>
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week-day"
                                    label="Dia da semana"
                                    options={[
                                        {value: '0', label: 'Domingo'},
                                        {value: '1', label: 'Segunda'},
                                        {value: '2', label: 'Terça'},
                                        {value: '3', label: 'Quarta'},
                                        {value: '4', label: 'Quinta'},
                                        {value: '5', label: 'Sexta'},
                                        {value: '6', label: 'Sábado'},
                                    ]}
                                />
                                <Input name="from" label="Das" type="time"/>
                                <Input name="to" label="Até" type="time"/>
                            </div>
                        )
                    })}
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
