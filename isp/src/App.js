
import './App.css';

import BotaoDoe from './Componentes/BotaoDoe';
import BotoesTopo from './Componentes/BotoesTopo/BotoesTopo';

import Logo from './Componentes/Logo';
import Banner from './Componentes/Banner/index';
import ConteudoBanner from './Componentes/ConteudoBanner';

import FundoBotoes from './Componentes/FundoBotoes';
import QuemSomos from './Componentes/QuemSomos';
import Rodape from './Componentes/rodape/index';







function App() {
  return (
    <div className="App">
      <FundoBotoes/>
      <BotoesTopo/>
      <BotaoDoe/>
      <Logo/>

      <Banner />
    
      <ConteudoBanner/>
      <QuemSomos/>
      <Rodape/>
   
    </div>
  );
}

export default App;
