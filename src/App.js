import React from 'react';
// import { Title } from './estilos/Styled'
import Header from './components/Header'
import Cadastro from './components/Cadastro'
import Login from './components/Login'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>

        {/* Essa Tag a baixo é onde fica o navbar do site que fica dentro do components*/}
        <Header />

        <Switch>
          <Route path="/Cadastro"><Cadastro /></Route>
          <Route path="/Login"><Login /></Route>
  


          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
