import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from './Chat';
import Main from './Main';
import JppizzaChat from './JppizzaChat';
import Userregister from './Userregister';
import Userlogin from './Userlogin';
import Vendor from './Vendor';



function App() {
  document.title = "yellowchat | chat with local shops";
  return (

    <Router>
      <div>
        {/* <Wrapper> */}
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/chat" render={() => <Chat />} />
        <Route exact path="/jppizza" render={() => <JppizzaChat />} />
        <Route exact path="/userregister" render={() => <Userregister />} />
        <Route exact path="/userlogin" render={() => <Userlogin />} />
        <Route exact path="/vendor" render={() => <Vendor />} />


        {/* </Wrapper> */}
      </div>
    </Router>

  );
}


export default App;