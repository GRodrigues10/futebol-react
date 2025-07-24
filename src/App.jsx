import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Campeonatos from './pages-links/Campeonatos';
import Partidas from './pages-links/Partidas';
import Times from './pages-links/Times';
import Sobre from './pages-links/Sobre';
import Home from './pages-links/Home';
import Jogadores from './pages-links/Jogadores';

function App() {


  return (
    <>
      <BrowserRouter basename="/futebol-react">
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/campeonatos' element={<Campeonatos />} />
    <Route path='/partidas' element={<Partidas />} />
    <Route path='/times' element={<Times />} />
    <Route path='/sobre' element={<Sobre />} />
    <Route path='/jogadores' element={<Jogadores />} />
  </Routes>
</BrowserRouter>

    </>
  );
}

export default App;
