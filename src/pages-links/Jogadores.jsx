import { StylesJogadores } from "./JogadoresStyles";
import vinijr from "../assets/vini.png";
import arias from "../assets/arias.png";
import musiala from "../assets/musiala2.png";
import mbappe from "../assets/mbappe.png";
import haaland from "../assets/haaland.png";
import bellingham from '../assets/jude.png';
import debruyne from '../assets/de-bruyne.png';
import luisdiaz from '../assets/luiz.png';
import martinelli from '../assets/martineli.png';
import dembele from '../assets/dembele.png';
import yamal from '../assets/yamal.png';
import brian from '../assets/brian.png';
import gnabry from '../assets/gnabry.png';
import cavani from '../assets/cavani.png';
import Header from "../pages/header/Header";
import { useNavigate } from "react-router-dom";

const jogadores = [
  { img: vinijr, name: "Vinícius Júnior" },
  { img: arias, name: "John Árias" },
  { img: musiala, name: "Jamal Musiala" },
  { img: mbappe, name: "Mbappé" },
  { img: haaland, name: "Erling Haaland" },
  { img: bellingham, name: "Jude Bellingham" },
  { img: debruyne, name: "De Bruyne" },
  { img: luisdiaz, name: "Luis Diaz" },
  { img: martinelli, name: "Matheus Martinelli" },
  { img: dembele, name: "Dembelé" },
  { img: yamal, name: "Lamine Yamal" },
  { img: brian, name: "Brian" },
  { img: gnabry, name: "Gnabry" },
  { img: cavani, name: "Edinson Cavani" },
];

export default function Jogadores() {
const navigate = useNavigate();
    const voltar = () => {
        
        navigate('/')
    }
  return (
    <>

      <Header />
      <StylesJogadores>
        <h1>Jogadores</h1>
        <p>Conheça os incríves jogadores do futebol mundial.</p>
        <div className="content">
          {jogadores.map((player, index) => (
            <div key={index} className="player">
              <img src={player.img} alt={player.name} />
            </div>
          ))}
        </div>
        <button onClick={voltar} className="btn">Voltar</button>

      </StylesJogadores>
    </>
  );
}
