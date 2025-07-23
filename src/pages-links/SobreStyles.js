import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0F0F0F;
  color: #E0E0E0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Content = styled.div`
  max-width: 768px;
  text-align: center;
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
