import { SectionStyles2 } from "./Styles";
import real from "../../assets/real2-logo.png";
import city from "../../assets/city2-logo.png";
import boca from "../../assets/boca-logo.png";
import liverpool from "../../assets/liver-logo.png";
import flu from "../../assets/flu-logo.png";
import alhilal from "../../assets/alhila-logo.png";
import paris from "../../assets/psg2-logo.png";
import barça from "../../assets/barça-logo.png";
import ajax from "../../assets/ajax-logo.png";
import bayern from "../../assets/bayern2-log.png";

import vinijr from "../../assets/vini.png";
import arias from "../../assets/arias.png";
import musiala from "../../assets/musiala2.png";
import mbappe from "../../assets/mbappe.png";
import haaland from "../../assets/haaland.png";
import bellingham from '../../assets/jude.png'
import debruyne from '../../assets/de-bruyne.png'
import luisdiaz from '../../assets/luiz.png'
import martinelli from '../../assets/martineli.png'
import dembele from '../../assets/dembele.png'
import yamal from '../../assets/yamal.png'
import brian from '../../assets/brian.png'
import gnabry from '../../assets/gnabry.png'
import cavani from '../../assets/cavani.png'
import { useNavigate } from "react-router-dom";


function Section2() {

  const navigate = useNavigate();

  function campeonatos(){
    navigate('/campeonatos');
  }

  function partidas(){
    navigate('/partidas');
  }

  function times(){
    navigate('/times');
  }

  function jogadores(){
    navigate('/jogadores');
  }



  return (
    <>
      <SectionStyles2>
        <div className="container">
          <div className="box campeonatos">
            <h1>Campeonatos</h1>
            <p>
              Veja os principais campeonatos nacionais e internacionais que
              movimentam o mundo do futebol.
            </p>

            <div className="lista-campeonatos">
              <div className="item-campeonato">
                <h2>Brasileirão Série A</h2>
                {/* <p>A elite do futebol brasileiro com os maiores clubes do país.</p> */}
              </div>

              <div className="item-campeonato">
                <h2>Champions League</h2>
                {/* <p>O torneio europeu mais prestigiado, com os gigantes da Europa.</p> */}
              </div>

              <div className="item-campeonato">
                <h2>Copa do Mundo</h2>
                {/* <p>A maior competição de seleções do planeta, a cada 4 anos.</p> */}
              </div>

              <div className="item-campeonato">
                <h2>Libertadores</h2>
                {/* <p>A emoção da América do Sul, com rivalidades históricas.</p> */}
              </div>

              <div className="item-campeonato">
                <h2>Premier League</h2>
                {/* <p>O campeonato inglês com alto nível técnico e grandes clássicos.</p> */}
              </div>
            </div>

            <button className="btn" onClick={campeonatos}>Ver Todos os Campeonatos</button>
          </div>

          <div className="box partidas">
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
                <span className="vs">x</span>
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
                <span className="vs">x</span>
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
                <span className="vs">x</span>
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
                <span className="vs">x</span>
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
                <span className="vs">x</span>
                <span className="time time-direita">
                  <strong>Bayern de Munique</strong>
                  <img src={bayern} alt="Bayern logo" />
                </span>
              </li>
            </ul>

            <button className="btn" onClick={partidas}>Ver Partidas</button>
          </div>

          <div className="box times">
            <h1>Times</h1>
            <p>
              Confira os clubes que marcaram sua história no futebol mundial.
            </p>

            <div className="lista-times">
              <ul>
                <li className="real">
                  <img src={real} alt="real-logo" />
                  <span>Real Madrid (Espanha)</span>
                </li>
                <li className="city">
                  <img src={city} alt="city-logo" />
                  <span>Manchester City (Inglaterra)</span>
                </li>
                <li className="bayern">
                  <img src={bayern} alt="bayern-logo" />
                  <span>Bayern de Munique (Alemanha)</span>
                </li>
                <li className="psg">
                  <img src={paris} alt="psg-logo" />
                  <span>Paris Saint-Germain (França)</span>
                </li>
                <li className="flu">
                  <img src={flu} alt="flu-logo" />
                  <span>Fluminense (Brasil)</span>
                </li>
                <li className="barca">
                  <img src={barça} alt="barça-logo" />
                  <span>Barcelona (Espanha)</span>
                </li>
                <li className="liverpool">
                  <img src={liverpool} alt="liverpool-logo" />
                  <span>Liverpool (Inglaterra)</span>
                </li>
                <li className="boca">
                  <img src={boca} alt="boca-logo" />
                  <span>Boca Juniors (Argentina)</span>
                </li>
                <li className="ajax">
                  <img src={ajax} alt="ajax-logo" />
                  <span>Ajax (Holanda)</span>
                </li>
                <li className="alhilal">
                  <img src={alhilal} alt="alhilal-logo" />
                  <span>Al Hilal (Arábia Saudita)</span>
                </li>
              </ul>
            </div>

            <button className="btn" onClick={times}>Ver Times</button>
          </div>

          <div className="box jogadores">
            <h1>Jogadores</h1>
            <p>
              Grandes jogadores marcam gerações com sua técnica, carisma e
              conquistas. Seja decidindo títulos em finais épicas ou encantando
              com dribles geniais, eles inspiram milhões e se tornam lendas
              dentro e fora dos gramados.
            </p>

            <div className="lista-jogadores">
              <ul>
                <li>
                  <img src={vinijr} alt="Vinícius Jr" />{" "}
                  <span>Vinícius Jr (Real Madrid)</span>
                </li>
                <li>
                  <img src={haaland} alt="Haaland" />{" "}
                  <span>Erling Haaland (Manchester City)</span>
                </li>
                <li>
                  <img src={arias} alt="Jhon Arias" />{" "}
                  <span>Jhon Arias (Fluminense)</span>
                </li>
                <li>
                  <img src={mbappe} alt="Mbappé" />{" "}
                  <span>Kylian Mbappé (PSG)</span>
                </li>
                <li>
                  <img src={musiala} alt="Musiala" />{" "}
                  <span>Jamal Musiala (Bayern de Munique)</span>
                </li>
                <li>
        <img src={bellingham} alt="Jude Bellingham" />
        <span>Jude Bellingham (Real Madrid)</span>
      </li>
      <li>
        <img src={debruyne} alt="Kevin De Bruyne" />
        <span>Kevin De Bruyne (Manchester City)</span>
      </li>
      <li>
        <img src={luisdiaz} alt="Luis Díaz" />
        <span>Luis Díaz (Liverpool)</span>
      </li>
      <li>
        <img src={cavani} alt="Edinson Cavani" />
        <span>Edinson Cavani (Boca Juniors)</span>
      </li>
      <li>
        <img src={martinelli} alt="Gabriel Martinelli" />
        <span>Matheus Martinelli (Fluminense)</span>
      </li>
      <li>
        <img src={dembele} alt="Ousmane Dembélé" />
        <span>Ousmane Dembélé (PSG)</span>
      </li>
      <li>
        <img src={yamal} alt="Lamine Yamal" />
        <span>Lamine Yamal (Barcelona)</span>
      </li>
      <li>
        <img src={brian} alt="Brian Brobbey" />
        <span>Brian Brobbey (Ajax)</span>
      </li>
      <li>
        <img src={gnabry} alt="Serge Gnabry" />
        <span>Serge Gnabry (Bayern de Munique)</span>
      </li>
              </ul>
            </div>

            <button className="btn jogador" onClick={jogadores}>Ver Jogadores</button>
          </div>
        </div>
      </SectionStyles2>
    </>
  );
}

export default Section2;
