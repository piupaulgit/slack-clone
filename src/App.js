import { useState } from 'react';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      <BrowserRouter>
      {
        !user ? (
          <Login></Login>
        ) : (
          <>
          <Header></Header>
          <div className="app__body">
            <Sidebar></Sidebar>
            <Switch>
              <Route path="/room/:roomId">
                <Chat></Chat>
              </Route>
              <Route path="/">
                <h1>welcome</h1>
              </Route>
            </Switch>
          </div>
        </>
        )
      }
        
      </BrowserRouter>
    </div>
  );
}

export default App;
