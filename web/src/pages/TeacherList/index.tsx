import React, {FormEvent, useState} from 'react';
import './styles.css';
import PageHeader from "../../components/PageHeader";
import TeacherItem, {TeacherProp} from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherList() {
    const title = 'Estes são os proffys disponíveis.';

    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        console.log(response);
        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title={title}>
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Inglês', label: 'Inglês'},
                            {value: 'Química', label: 'Química'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Português', label: 'Português'},
                        ]}
                    />
                    <Select
                        name="week-day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => {
                            setWeekDay(e.target.value);
                        }}
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
                    <Input name='time'
                           label='Hora'
                           type="time"
                           value={time}
                           onChange={(e) => {
                               setTime(e.target.value);
                           }}/>
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: TeacherProp) => <TeacherItem key={teacher.id} teacher={teacher}/>)}
            </main>
        </div>
    )
}

export default TeacherList;
