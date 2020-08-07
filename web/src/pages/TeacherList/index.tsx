import React from 'react';
import './styles.css';
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

function TeacherList() {
    const title = 'Estes são os proffys disponíveis.';
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title={title}>
                <form id="search-teachers">
                    <Input name='subject' label='Matéria' />
                    <Input name='week-day' label='Dia da semana' />
                    <Input name='time' label='Hora'  type="time"/>
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;