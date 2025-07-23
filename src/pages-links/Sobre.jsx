import React from 'react';
import {
  Container,
  Content,
  Title,
  Paragraph,
  Highlight,
} from './SobreStyles';
import Header from '../pages/header/Header';

function Sobre() {
  return (
    <>
     <Header/>
    <Container>
      <Content>
        <Title>Sobre o Projeto</Title>
        <Paragraph>
          Este projeto foi desenvolvido com <Highlight>React</Highlight>, com o objetivo de explorar e exibir informações sobre os principais clubes de futebol do mundo.
          Aqui, os usuários podem navegar por páginas de times, visualizar partidas recentes, placares e outros detalhes de forma dinâmica e estilizada.
        </Paragraph>
        <Paragraph>
          A aplicação também utiliza <Highlight>Styled Components</Highlight>, <Highlight>React Router</Highlight> para navegação entre páginas, e uma abordagem visual moderna inspirada em apps de esportes reais.
        </Paragraph>
        <Paragraph>
          O projeto é totalmente responsivo e pode ser expandido para incluir estatísticas dos jogadores, histórico de confrontos e integração com APIs de dados esportivos no futuro.
        </Paragraph>
      </Content>
    </Container>
    </>
  );
}

export default Sobre;
