
import './App.css';

import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/home';

import Main from './main';
import Transactions from './components/transactions';
import Cards from './components/cards';
import Setting from './components/Setting';


function App() {
  return (
  <div>
  <BrowserRouter>
  <Main>
 <Routes>
    <Route path="home" element = {<Home />} /> 
    <Route path="transactions" element = {< Transactions />} />
    <Route path="cards" element = { <Cards />} />
    <Route path="setting" element = { <Setting />} />

</Routes>
</Main>
    
  
  </BrowserRouter>
    {/* <Registration /> */ }
 
    </div>
  );
}

export default App;
