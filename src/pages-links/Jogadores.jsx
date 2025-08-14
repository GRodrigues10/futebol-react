import { StylesJogadores } from "./JogadoresStyles";
import vinijr from "../assets/vini.png";
import arias from "../assets/arias.png";
import musiala from "../assets/musiala2.png";
import mbappe from "../assets/mbappe.png";
import haaland from "../assets/haaland.png";
import bellingham from "../assets/jude.png";
import debruyne from "../assets/de-bruyne.png";
import luisdiaz from "../assets/luiz.png";
import martinelli from "../assets/martineli.png";
import dembele from "../assets/dembele.png";
import yamal from "../assets/yamal.png";
import brian from "../assets/brian.png";
import gnabry from "../assets/gnabry.png";
import cavani from "../assets/cavani.png";
import Header from "../pages/header/Header";
import { useNavigate } from "react-router-dom";

const jogadores = [
  {
    img: vinijr,
    name: "Vinícius Júnior",
    instagram: "https://www.instagram.com/viniciciusjr/",
  },
  {
    img: arias,
    name: "John Árias",
    instagram: "https://www.instagram.com/johnarias/",
  },
  {
    img: musiala,
    name: "Jamal Musiala",
    instagram: "https://www.instagram.com/jmusiala/",
  },
  {
    img: mbappe,
    name: "Mbappé",
    instagram: "https://www.instagram.com/k.mbappe/",
  },
  {
    img: haaland,
    name: "Erling Haaland",
    instagram: "https://www.instagram.com/erling.haaland/",
  },
  {
    img: bellingham,
    name: "Jude Bellingham",
    instagram: "https://www.instagram.com/judebellingham/",
  },
  {
    img: debruyne,
    name: "De Bruyne",
    instagram: "https://www.instagram.com/kdb_official/",
  },
  {
    img: luisdiaz,
    name: "Luis Diaz",
    instagram: "https://www.instagram.com/luisdiaz19/",
  },
  {
    img: martinelli,
    name: "Matheus Martinelli",
    instagram: "https://www.instagram.com/martinelli/",
  },
  {
    img: dembele,
    name: "Dembelé",
    instagram: "https://www.instagram.com/ousmadembele/",
  },
  {
    img: yamal,
    name: "Lamine Yamal",
    instagram: "https://www.instagram.com/lamineyamal/",
  },
  { img: brian, name: "Brian", instagram: "https://www.instagram.com/brian/" },
  {
    img: gnabry,
    name: "Gnabry",
    instagram: "https://www.instagram.com/sergegnabry/",
  },
  {
    img: cavani,
    name: "Edinson Cavani",
    instagram: "https://www.instagram.com/cavanioficial/",
  },
];

export default function Jogadores() {
  const navigate = useNavigate();
  const voltar = () => navigate("/");

  return (
    <>
      <Header />
      <StylesJogadores>
        <h1>Jogadores</h1>
        <p>Conheça os incríves jogadores do futebol mundial.</p>
        <div className="content">
          {jogadores.map((player, index) => (
            <div key={index} className="player">
              <a
                href={player.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={player.img} alt={player.name} />
              </a>
            </div>
          ))}
        </div>
        <button onClick={voltar} className="btn">
          Voltar
        </button>
      </StylesJogadores>
    </>
  );
}
