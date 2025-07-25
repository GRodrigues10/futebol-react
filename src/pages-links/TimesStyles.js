import styled from "styled-components"

export const TimesStyles = styled.div `
    margin-top: 50px;
    padding: 50px;
    background-color: #0F0F0F;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

  .box-container a {
  display: contents;
  text-decoration: none;
  color: inherit;
}
    
    
    .title{
        font-size: 3rem;
        margin-bottom: 20px;
    }

    p{
        margin-bottom: 30px;
        font-size: 1.5rem;
        color: #B3B3B3;
    }

    .box-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        transition: .4s ease;

        
    }

    grid-template-columns: repeat(3, 1fr);

    .box{
        background-color: #1A1A1A;
        width: 200px;
        padding: 20px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       border-radius: 5px;
       cursor: pointer;
       transition: .4s ease;
    }

    .box:hover{
        background-color: white;
        color: black;
        transform: scale(1.1);
    }
    .box h1{
        font-size: 1.5rem ;
        text-align: center;
        margin-top: 20px;
    }

    img{
        width: 100px;
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


  @media screen and (max-width:930px) {
    .box-container{
        grid-template-columns:repeat(3, 1fr);
        transition: .4s ease;

    }

    .title{
        font-size: 2.8rem;
    }

    p{
        font-size: 1.4rem;
    }
  }

    @media screen and (max-width:768px) {
    .box-container{
        grid-template-columns:repeat(2, 1fr);
        transition: .4s ease;
    }

    .title{
        font-size: 2.6rem;
    }

    p{
        font-size: 1.3rem;
        text-align: center;
    }

    img{
        width: 80px;
    }

    .btn{
        font-size: 1rem;
    }


  }

  @media screen and (max-width:530px) {
     .box-container{
        grid-template-columns:1fr;
        transition: .4s ease;
    }
    .box{
        width: 100%;
    }

    .title{
        font-size: 2.4rem;
    }

    p{
        font-size: 1.2rem;
        text-align: center;
    }

    img{
        width: 80px;
    }

    .btn{
        font-size: 1rem;
    }
  }


`
 