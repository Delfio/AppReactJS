import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Respository from './pages/Repository';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} ></Route>
        <Route path="/repository" component={Respository} ></Route>

      </Switch>
    </BrowserRouter>
  )
}
