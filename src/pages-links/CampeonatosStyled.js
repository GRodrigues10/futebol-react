import styled from "styled-components"

export const CampeonatoStyles = styled.div `
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(1fr);
    background-color: #111111ff;
    gap: 20px;
    padding: 20px;
    margin-top: 50px;
    padding-top: 60px;

    
.box {
  background-color: #2d2f3a;
  color: #f0f0f0;
  border: 2px solid 	#405273;
  border-radius: 10px;
  padding: 1.5rem;
  height: 500px;

  /* sombra azul acinzentada suave */
  box-shadow: 0 0 10px rgba(60, 70, 100, 0.4);

  /* transição para transform e sombra */
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.box:hover {
  /* aumento leve */
 

  /* sombra mais forte */
  box-shadow: 0 0 20px rgba(60, 70, 100, 0.7);
}


.box h1{
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: 3rem;
}

.box p{
    font-size: 1.5rem;
    text-align: justify;
    text-indent: 10px;
}

    
`