import { styled } from 'styled-components'


export const SectionStyles = styled.section `
    height: 700px;
    background-color: #111111ff;
    color: black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

   h1{
    font-size: 5rem;
   position: relative;
   bottom: 10px;
    text-shadow: 0px 2px 4px black;
   }

   p{
    margin-top: 30px;
    font-size: 1.6rem;
    color: #d1d5db;
   }


   @media screen  and (max-width:930px){
      h1{
        font-size: 4.5rem;
      }
      p{
        font-size: 1.4rem;
      }
   }

   @media screen and (max-width:768px){
      h1{
        font-size: 4rem;
      }

      P{
        font-size: 1.2rem;
      }
   }

   @media screen and (max-width:480px){
      h1{
        font-size: 3.5rem;
      }

      P{
        font-size: 1rem;
      }
   }

 
`


export const SectionStyles2 = styled.section `  
    /* height: 100vh; */
    background-color: #1a1919ff; /* preto */
    /* ajusta aqui se o header for maior */
    display: flex;
    align-items: center;
    justify-content: center;
   
    
 
    .container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        padding-top: 50px;
        width: 100%;

       
        
    }
   .box {
  margin: 0 30px;
  min-height: 250px;
  min-width: 300px;
  padding: 20px;
  background-color: #2d2f3a;
  color: white;
  border-radius: 5px;
  text-align: center;
  transition: .4s ease;
  box-shadow: 2px 2px 4px black;
}

.box.campeonatos,
.box.times,
.box.jogadores {
  max-width: 500px;
  width: 100%;
}

    .box h1{
        margin-bottom: 10px;
        font-size: 2rem;
    }

    .box p{
        text-indent: 5px;
        text-align: justify;
        margin-bottom: 10px;
    }

    .box button{
        padding: 10px;
        border: 1px solid black;
        color: white;
        background-color: green;
        border-radius: 5px;
        margin-top: 10px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: .4s ease;
        
    }

    .box button:hover{
        background-color: darkgreen;

    }

  

   
.lista-campeonatos {
  padding: 20px;
  background-color: #2d2f3a;
  color: white;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: .4s ease;
  display: flex;
  flex-direction: column;
 
  
}

.item-campeonato {
  padding: 20px;
  background-color: #161515ff;
  margin: 10px 0;
  width: 100%; /* ocupa toda largura disponível sem extrapolar */
  border-radius: 5px;
  cursor: pointer;
  transition: .4s ease;
}


.item-campeonato:hover {
  background-color: white;
  color: black;
}



    .partidas{
        width: 500px;
        /* height: 540px; */
  }


  



    .times{
        margin-bottom: 20px;
    }

    .lista-times{
       display: flex;
       flex-direction: column;
    }

    .lista-times ul li{
        padding: 20px;
        list-style: none;
         background-color: #161515ff;
         margin: 10px;
         font-size: 1.2rem;
         border-radius: 5px;
         cursor: pointer;
    }


 

.jogadores {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #2d2f3a;
  border-radius: 8px;
  box-shadow: 2px 2px 8px #000000ab;
  color: white;
  cursor: pointer;

  /* Adicionados para igualar aos outros boxes */
  margin: 0 30px;            /* igual ao .box */
  min-height: 250px;         /* igual ao .box */
  min-width: 300px;          /* igual ao .box */
  text-align: center;        /* igual ao .box */
  transition: .4s ease;      /* igual ao .box */
  margin-bottom: 50px;       /* evita grudar no footer */
}

.jogador{
    position: relative;
    top: 5px;
}

.lista-jogadores {
  margin-top: 30px;
}

.lista-jogadores ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lista-jogadores li {
  display: flex;
  align-items: center;
  background-color: #1b1b1b;
  padding: 10px 14px;
  border-radius: 6px;
  color: #e4e4e4;
  transition: all 0.3s ease;
}

.lista-jogadores li:hover {
  background-color: #ffffff;
  color: #000000;
}

.lista-jogadores li img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #444;
}

.lista-jogadores li span {
  font-size: 1rem;
  font-weight: 500;
}

    img{
        width: 50px;
    }


.times {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #2d2f3a;
  color: white;
  border-radius: 8px;
  box-shadow: 2px 2px 8px #000000ab;
  text-align: center;
  cursor: pointer;

  /* Igual aos outros boxes */
  margin: 0 30px;
  min-height: 250px;
  min-width: 300px;
  transition: .4s ease;
  margin-bottom: 50px;
}



 .lista-times {
  margin-top: 30px;
}

.lista-times ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lista-times li {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: #1b1b1b; /* fundo dark leve */
  transition: background-color 0.3s ease;
  color: #d1d5db;
}

.lista-times li:hover {
  background-color: white;
}
.lista-times li:hover span {
  color: black;
}


.lista-times li img {
  width: 32px;
  height: 32px;
  margin-right: 12px;
  object-fit: contain;
  border-radius: 4px;
}

.lista-times li span {
  font-size: 1rem;
  font-weight: 500;
  color: #e4e4e4;
}


.lista-partidas {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.lista-partidas li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1b1b1b;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.7);
  color: white;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.partidas .btn{
    position: relative;
    margin-top:20px;
}

.lista-partidas li:hover {
  background-color: white;
  color: black;
  span{
    color: black;
  }
}



.time {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 130px;
}

.time-esquerda img {
  order: 0;
}

.time-esquerda strong {
  order: 1;
}

.time-direita {
  justify-content: flex-end;
}

.time-direita strong {
  order: 0;
}

.time-direita img {
  order: 1;
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
}

.time-esquerda img,
.time-direita img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
}

.vs {
  font-weight: bold;
  font-size: 1.3rem;
  color: #ccc;
  user-select: none;
  margin: 0 10px;
  min-width: 20px;
  text-align: center;
}


/* Responsividade leve */
@media (max-width: 600px) {
  .lista-times li span {
    font-size: 0.9rem;
  }
  .lista-times li img {
    width: 28px;
    height: 28px;
  }
}

/* Responsividade geral para .container */
@media screen and (max-width:930px) {
    .container {
    grid-template-columns: repeat(1fr);
    padding: 20px;
  }
  .box {
    margin: 0 auto;
    width: 90%;
    transition: .4s ease;
  }

  .jogadores {
    height: auto;
  }

  .partidas {
    width: 90%;
  }


  .box h1 {
    font-size: 1.6rem;
  }

  .box button {
    font-size: 1rem;
    padding: 8px;
  }

  .lista-times li span,
  .lista-jogadores li span {
    font-size: 1rem;
  }

 
  .lista-times li img,
  .lista-jogadores li img {
    width: 36px;
    height: 36px;
  }

  .time{
    min-width: 100px;
  }

 span{
  font-size: 0.8rem;
 }


  .vs {
    font-size: 1rem;
  }


}



/* Ajustes para tablets */
@media (max-width: 768px) {



  .container {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .box {
    margin: 0 auto;
    width: 90%;
      transition: .4s ease;
  }

  .jogadores {
    height: auto;
  }

  .partidas {
    width: 90%;
  }
  .box h1 {
    font-size: 1.6rem;
  }

  .box button {
    font-size: 1rem;
    padding: 8px;
  }

  .lista-times li span,
  .lista-jogadores li span {
    font-size: 0.95rem;
  }

  .lista-times li img,
  .lista-jogadores li img {
    width: 36px;
    height: 36px;
  }

  .time {
    min-width: 100px;
  }

  .vs {
    font-size: 1.1rem;
  }
}

/* Ajustes para smartphones */
@media (max-width: 480px) {
  .box {
    padding: 16px;
    transition: .4s ease;
  }

  .box h1 {
    font-size: 1.4rem;
  }

  .box p {
    font-size: 0.95rem;
    text-align: left;
  }

  .box button {
    width: 100%;
  }

  .lista-partidas li,
  .lista-times li,
  .lista-jogadores li {
    padding: 10px;
    gap: 8px;
  }

  .lista-times li img,
  .lista-jogadores li img {
    width: 30px;
    height: 30px;
  }

  .lista-jogadores ul,
  .lista-times ul {
    gap: 8px;
  }

  .time {
    flex-direction: column;
    align-items: center;
    gap: 4px;
    min-width: auto;
  }

  .vs {
    font-size: 1rem;
    margin: 0 5px;
  }
}


   
`

