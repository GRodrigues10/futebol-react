import styled from "styled-components";

export const StylesJogadores = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 60px;
  padding: 60px 20px 40px 20px;
  background-color: #0d1117; /* fundo escuro elegante */
  color: white;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 10px;
    color: white;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 40px;
    color: #c9d1d9;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
    justify-items: center;
    align-items: center;
    cursor: pointer;
  }

.player {
    width: 180px;
    height: 180px;
    background-color: #1f2937; /* dark elegante */
    border: 2px solid #eeeeeeff; /* borda um pouco mais clara */
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(252, 251, 251, 0.15);

  

    &:hover {
      transform: scale(1.07);
      background-color: #ffffff;
      box-shadow: 0 0 15px rgba(254, 254, 255, 0.53);
    }
  }

  .player:hover img {
    filter: brightness(0.9);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: filter 0.3s ease;
  }

  
    .btn {
    display: block;
    margin: 50px auto 0;
    padding: 14px 28px;
    font-size: 1.2rem;
    background-color:  #2d2f3a;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #2d2f3a93;
  }


  @media screen and (min-width: 530px) {
    .content{
        grid-template-columns: repeat(2, 1fr);
    }
  }

    @media screen and (min-width: 768px) {
    .content{
        grid-template-columns: repeat(3, 1fr);

    }

      h1 {
    font-size: 2.8rem;
  }

  p {
    font-size: 1.4rem;
   
  }
  }

    @media screen and (min-width: 992px) {
    .content{
        grid-template-columns: repeat(4, 1fr);
    }

         h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
   
  }
  }
`;
