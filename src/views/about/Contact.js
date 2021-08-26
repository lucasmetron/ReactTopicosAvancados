import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

export default function Contact(props) {

    const history = useHistory(); //faz redirecionamento de página
    const location = useLocation(); //Mosta a url 
    const params = useParams(); //pega parametros da URL
    const match = useRouteMatch('');// verifica se uma rota bate com a rota atual

    setTimeout(() => {
        history.push('/')
    }, 2000)
    console.log(history)


    return (
        <h1>Contact</h1>
    )
}