import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import CadastroVideo from './pages/cadastro/Video';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Pagina404 = () =>(<div>Página 404</div>)
ReactDOM.render(  
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/" component={App} exact />
      <Route path="//" component={()=>(<div>Página 404.1</div>)} exact/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')

);

{/* 
    //if(){}=>switch
    <React.StrictMode>
     <App />
   </React.StrictMode>,
  document.getElementById('root') */}

  // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


  