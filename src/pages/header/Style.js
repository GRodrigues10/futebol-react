import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding: 20px 30px;
  background-color: #1f1f1f;
  color: white;
  z-index: 999;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;


  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 1.8rem;
    user-select: none;
  }
  h1 span {
    font-size: 2rem;
    margin-right: 8px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  /* Desktop menu - sempre visível */
  nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }

  nav ul li a {
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  nav ul li a:hover {
    background-color: #33a852;
    color: #fff;
  }

  /* Hamburger - escondido no desktop */
  .nav-hamburger {
    display: none;
    cursor: pointer;
    width: 30px;
    height: 25px;
    position: relative;
    z-index: 1001;
    user-select: none;
  }

  .nav-hamburger span {
    position: absolute;
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 3px;
    transition: all 0.4s ease;
  }

  .nav-hamburger span:nth-child(1) {
    top: 0;
  }
  .nav-hamburger span:nth-child(2) {
    top: 11px;
  }
  .nav-hamburger span:nth-child(3) {
    bottom: 0;
  }

  /* Animar para X quando aberto */
  .nav-hamburger.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 11px;
  }
  .nav-hamburger.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-hamburger.open span:nth-child(3) {
    transform: rotate(-45deg);
    bottom: 11px;
  }

  /* Mobile Styles */
  @media (max-width: 930px) {
    nav ul {
      flex-direction: column;
      background: rgba(31, 31, 31, 0.95);
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 250px;
      padding-top: 80px;
      box-shadow: -3px 0 15px rgba(0, 0, 0, 0.6);
      transform: translateX(100%);
      transition: transform 0.4s ease;
      border-radius: 10px 0 0 10px;
      z-index: 1000;
    }

    nav ul.open {
      transform: translateX(0);
    }

 nav ul li a {
  display: block;          /* faz o link ocupar toda a linha */
  width: 100%;             /* largura total do menu */
  padding: 15px 20px;
  font-size: 1.2rem;
  border-radius: 0;
  border-bottom: 1px solid #444;
  cursor: pointer;         /* deixa cursor de link */
  transition: background-color 0.3s ease, color 0.3s ease;
}
nav ul li a:hover {
  background-color: #33a852;
  color: #fff;
}

    .nav-hamburger {
      display: block;
    }
  }
`;
