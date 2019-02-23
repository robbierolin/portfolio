import React from 'react'

import Projects from './projects'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <Switch>
  	<Route exact path='/portfolio' component={Projects} />
  </Switch>
)

export default Main;