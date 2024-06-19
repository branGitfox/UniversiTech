import React, { Component, Fragment } from 'react';
import Routers from './routers/Routers';
import { UserProvider } from './hooks/UserProvider'; // Importez le UserProvider
import "./tailwind.css";
import Home from './pages/home/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <UserProvider>
          <Routers />
        </UserProvider>
      </Fragment>
    );
  }
}

export default App;
