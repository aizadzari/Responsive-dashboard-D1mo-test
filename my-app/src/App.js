import React from 'react'
import { Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import AppRoute from './routes/';
import { publicRoutes } from './routes/route'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
