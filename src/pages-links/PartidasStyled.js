import styled from "styled-components";

export const PartidasStyles = styled.div`
  margin-top: 60px;
  padding-top: 60px;
  background-color: #0d1117; /* fundo elegante */
  color: white;
  padding:40px 20px;
  min-height: 100vh;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 20px;
    color: #00bcd4;

  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 40px;
    color: #c9d1d9;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  ul li {
    background-color: #161b22;
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 40px;
    border-radius: 16px;
    box-shadow: 0 0 12px rgba(0, 188, 212, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  ul li:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(0, 188, 212, 0.4);
  }

  .time {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 40%;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .time-direita {
    justify-content: flex-end;
    text-align: right;
  }

  .vs {
    font-size: 2rem;
    width: 20%;
    text-align: center;
    color: #00bcd4;
    font-weight: bold;
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  .gols{
    font-size: 1.8rem;
    margin: 0 10px;
  }

  .btn {
    display: block;
    margin: 50px auto 0;
    padding: 14px 28px;
    font-size: 1.2rem;
    background-color: #00bcd4;
    color: #0d1117;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #0097a7;
  }

  @media screen and (max-width:930px) {
    h1{
      font-size: 2.8rem;
    }
    p{
      font-size: 1.2rem;
    }

    .time{
      font-size: 1.3rem;
    }

    .vs{
      font-size: 1.4rem;
    }

    .gols{
      font-size: 1.4rem;
    }

    .btn{
      font-size:1.2rem;
    }

    @media screen and (max-width:768px) {
        h1{
      font-size: 2.6rem;
    }
    p{
      font-size: 1.1rem;
    }

    .time{
      font-size: 1.2rem;
    }

    .time-direita img{
      width: 40px;
    }

    .time-esquerda img{
      width: 40px;
    }

    .vs{
      font-size: 1.3rem;
    }

    .gols{
      font-size: 1.3rem;
    }

    .btn{
      font-size:1.1rem;
    }

    }

    @media screen and (max-width:530px){
        h1{
      font-size: 2.4rem;
    }
    p{
      font-size: 1rem;
    }

    .time{
      font-size: 0.9rem;
    }

    .time-direita img{
      width: 30px;
    }

    .time-esquerda img{
      width: 30px;
    }

    .vs{
      font-size: 1.1rem;
    }

    .gols{
      font-size: 1.1rem;
    }

    .btn{
      font-size:1rem;
    }
    }

    @media screen and (max-width:480px) {
      h1{
      font-size: 2.2rem;
    }
    p{
      font-size: 0.9rem;
    }

    .time{
      font-size: 0.8rem;

    
    }
    .time-esquerda{
      position: relative;
      right: 20px;
    }

     .time-direita{
      position: relative;
      left: 20px;
    }

    .time-direita img{
      width: 25px;
    }

    .time-esquerda img{
      width: 25px;
    }

    .vs{
      font-size: 0.9rem;
    }

    .gols{
            font-size: 0.9rem;

    }

    .btn{
      font-size:0.8rem;
    }

   
    }

   
  }
`;
