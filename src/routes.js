/**
 * Created by Administrator on 2017/5/1.
 */
import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/Main'
import Index from './components/Index'
import Shop from './components/Shop'
import Detail from './components/Detail'
import About from './components/About'


export default (
  <Route component={App}>
    <Route path="/" component={Index} />
    <Route path="/shop" component={Shop} />
    <Route path="/detail" component={Detail} />
    <Route path="/aboutus" component={About} />
  </Route>
)
