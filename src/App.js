import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from './Chat';
import Main from './Main';



function App() {
    document.title = "Employee Directory";
    return (
      <Router>
        <div>
          {/* <Wrapper> */}
          <Route exact path="/" render={() => <Main/>} />
          <Route exact path="/chat" render={() => <Chat/>} />
          {/* </Wrapper> */}
        </div>
      </Router>
    );
  }


export default App;