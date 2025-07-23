import real from "../assets/real2-logo.png";
import city from "../assets/city2-logo.png";
import boca from "../assets/boca-logo.png";
import liverpool from "../assets/liver-logo.png";
import flu from "../assets/flu-logo.png";
import alhilal from "../assets/alhila-logo.png";
import paris from "../assets/psg2-logo.png";
import barça from "../assets/barça-logo.png";
import ajax from "../assets/ajax-logo.png";
import bayern from "../assets/bayern2-log.png";
import { PartidasStyles } from "./PartidasStyled";
import { useNavigate } from "react-router-dom";
import Header from "../pages/header/Header";

export default function Partidas() {
const navigate = useNavigate();
    function nav(){
        
        navigate('/');
    }

  return (
    <>
    <Header/>
    <PartidasStyles>
      <h1>Partidas</h1>
      <p>
        Confira as partidas recentes e emocionantes entre grandes clubes.
      </p>

      <ul className="lista-partidas">
        <li>
          <span className="time time-esquerda">
            <img src={flu} alt="Fluminense logo" />
            <strong>Fluminense</strong>
          </span>
          <span className="placar">
            <strong className="gols">4</strong>
            <span className="vs">x</span>
            <strong className="gols">3</strong>
          </span>
          <span className="time time-direita">
            <strong>Real Madrid</strong>
            <img src={real} alt="Real Madrid logo" />
          </span>
        </li>

        <li>
          <span className="time time-esquerda">
            <img src={city} alt="Manchester City logo" />
            <strong>Manchester City</strong>
          </span>
          <span className="placar">
            <strong className="gols">1</strong>
            <span className="vs">x</span>
            <strong className="gols">1</strong>
          </span>
          <span className="time time-direita">
            <strong>Barcelona</strong>
            <img src={barça} alt="Barcelona logo" />
          </span>
        </li>

        <li>
          <span className="time time-esquerda">
            <img src={boca} alt="Boca Juniors logo" />
            <strong>Boca Juniors</strong>
          </span>
          <span className="placar">
            <strong className="gols">2</strong>
            <span className="vs">x</span>
            <strong className="gols">2</strong>
          </span>
          <span className="time time-direita">
            <strong>Ajax</strong>
            <img src={ajax} alt="Ajax logo" />
          </span>
        </li>

        <li>
          <span className="time time-esquerda">
            <img src={paris} alt="PSG logo" />
            <strong>PSG</strong>
          </span>
          <span className="placar">
            <strong className="gols">4</strong>
            <span className="vs">x</span>
            <strong className="gols">2</strong>
          </span>
          <span className="time time-direita">
            <strong>Liverpool</strong>
            <img src={liverpool} alt="Liverpool logo" />
          </span>
        </li>

        <li>
          <span className="time time-esquerda">
            <img src={alhilal} alt="Al Hilal logo" />
            <strong>Al Hilal</strong>
          </span>
          <span className="placar">
            <strong className="gols">3</strong>
            <span className="vs">x</span>
            <strong className="gols">5</strong>
          </span>
          <span className="time time-direita">
            <strong>Bayern de Munique</strong>
            <img src={bayern} alt="Bayern logo" />
          </span>
        </li>
      </ul>

      <button className="btn" onClick={nav}>Voltar</button>
    </PartidasStyles>
    </>
  );
}
