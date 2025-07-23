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
import fla from '../assets/flamengo.png'
import juve from '../assets/juve.png'
import inter from '../assets/inter.png'
import fica from '../assets/fica.png'


import { TimesStyles } from "./TimesStyles";
import Header from "../pages/header/Header";




export default function Times(){
    return(

        
    
    <>
     <Header/>
     <TimesStyles>
        <h1 className="title">Times</h1>
        <p>Explore os perfis dos mais famosos times de futebol do mundo.</p>
            <div className="box-container">
                <div className="box">
                    <img src={flu} alt="" />
                    <h1>Fluminense</h1>
                </div>

                 <div className="box">
                     <img src={real} alt="" />
                    <h1>Real Madrid</h1>
                </div>

                 <div className="box">
                     <img src={bayern} alt="" />
                    <h1>Bayern de Munique</h1>
                </div>

                 <div className="box">
                     <img src={paris} alt="" />
                    <h1>PSG</h1>
                </div>

                 <div className="box">
                     <img src={ajax} alt="" />
                    <h1>Ajax</h1>
                </div>

                 <div className="box">
                     <img src={liverpool} alt="" />
                    <h1>Liverpool</h1>
                </div>

                 <div className="box">
                     <img src={alhilal} alt="" />
                    <h1>Al Hilal</h1>
                </div>


                 <div className="box">
                     <img src={barça} alt="" />
                    <h1>Barcelona</h1>
                </div>

                 <div className="box">
                     <img src={boca} alt="" />
                    <h1>Boca Juniors</h1>
                </div>

                 <div className="box">
                     <img src={city} alt="" />
                    <h1>Manchester City</h1>
                </div>

                 <div className="box">
                     <img src={fla} alt="" />
                    <h1>Flamengo</h1>
                </div>


                 <div className="box">
                     <img src={juve} alt="" />
                    <h1>Juventus</h1>
                </div>


                 <div className="box">
                     <img src={inter} alt="" />
                    <h1>Internazionali</h1>
                </div>

                 <div className="box">
                     <img src={fica} alt="" />
                    <h1>Benfica</h1>
                </div>
            </div>
     </TimesStyles>

    
    </>)
}