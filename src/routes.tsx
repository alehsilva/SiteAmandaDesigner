import  React from 'react';
import { Switch, Route } from 'react-router-dom'

import Inicio from './Paginas/Inicio';
import Sobremim from './Paginas/Sobremim';

function Routes(){
    return(
        <main>
      
          <Switch>
            <Route exact path='/' component={Inicio}/>
            <Route path='/sobremim' component={Sobremim}/>
          </Switch>

      </main>  
    );
}

export default Routes;