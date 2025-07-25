import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0F0F0F;
  color: #E0E0E0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 10px;

   @media screen and (max-width:930px){
      
       margin-top: 40px;
       h1{
        font-size: 2.4rem;
       }
       p{
        font-size: 1.1rem;
       }
    }


       @media screen and (max-width:768px){
      
      
       h1{
        margin-top: 20px;
        font-size: 2.3rem;
       }
       p{
        font-size: 1rem;
       }
    }

        @media screen and (max-width:530px){
      
      
       h1{
        
        font-size: 2.1rem;
       }
       p{
        font-size: 0.9rem;
       }
    }

        @media screen and (max-width:480px){
      
      
       h1{
        
        font-size: 2rem;
       }
       p{
        font-size: 0.8rem;
       }
    }


`;

export const Content = styled.div`
  max-width: 768px;
  text-align: center;
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
    .btn{
      font-size: 1rem;
    }
  }

  @media screen and (max-width:768px) {
    .btn{
      font-size: 1rem;
    }
  }

   @media screen and (max-width:530px) {
    .btn{
      font-size: 0.9rem;
    }
  }

     @media screen and (max-width:480px) {
    .btn{
      font-size: 0.8rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #CCCCCC;
  margin-bottom: 1.5rem;
`;

export const Highlight = styled.span`
  font-weight: 600;
  color: #FFFFFF;
`;
