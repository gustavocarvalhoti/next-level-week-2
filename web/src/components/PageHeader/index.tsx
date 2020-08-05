import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

/*
title: string  - obrigatório
title?: string - aceita null
*/
interface PageHeaderProps {
    title: string
}

// FC - Function component
const PageHeader: React.FC<PageHeaderProps> = ({title, children}) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{title}</strong>
                {/*Funciona igual o slot do Vue*/}
                {children}
            </div>
        </header>
    )
}

export default PageHeader;