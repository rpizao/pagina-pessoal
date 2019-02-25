import React, { Component } from 'react';
import Title from '../components/titles/Title';

export default class Sobre extends Component{
    render(){
        return (
            <div className="background-content">
                <div className="header"><div className="subtitle">Opa! Tudo bem?</div>
                    Meu nome é <Title>Rafael Pizão</Title>
                </div>
                Sou analista de sistemas por formação, já atuei como SM e Engenheiro de Software.
                <br />A principal motivação deste espaço é tornar público soluções criadas no dia a dia ou sob demanda, além de manter um resumo profissional e um canal permanente para troca de experiências e/ou contatos de trabalho.
                <br />Gosto demais de TI, então deve ser uma tendência os textos aqui serem voltados para isto, mas não só isso!
                Afinal, o espaço é meu e eu falo e escrevo o que eu quiser!
                <br />Leia se julgar interessante, caso contrário, pode ir embora (e voltar depois, tem coisa nova por aí! rs).
                <br />Considero a área de TI uma das mais dinâmica, senão a mais, o que permite estar em constante aprendizado.
                <br />Por outro lado, como bom zueiro (e dono do espaço! rs), qualquer bobagem pode aparecer por aqui também, desde fotos de animais fofinhos, até piadas toscas… espero que em menor proporção. Rs
                <p />Sinta-se a vontade!
            </div>
        );
    }
}