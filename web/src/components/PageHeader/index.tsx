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
    title: string,
    description?: string
}

// FC - Function component
const PageHeader: React.FC<PageHeaderProps> = ({title, description, children}) => {
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
                {/*Executa somente se tiver a description*/}
                {description && <p>{description}</p>}
                {/*Funciona igual o slot do Vue*/}
                {children}
            </div>
        </header>
    )
}

export default PageHeader;