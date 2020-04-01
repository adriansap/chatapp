/*!*/
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from './Chat';
import Main from './Main';
import JppizzaChat from './JppizzaChat';
import Userregister from './Userregister';
import Userlogin from './Userlogin';
import Vendor from './Vendor';
import Userdashboard from './Userdashboard';
import Marker from './Marker';


function App() {
  document.title = "yellowchat | chat with local shops";
  return (

    <Router>
      <div>

        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/chat" render={() => <Chat />} />
        <Route exact path="/jppizza" render={() => <JppizzaChat />} />
        <Route exact path="/userregister" render={() => <Userregister />} />
        <Route exact path="/userlogin" render={() => <Userlogin />} />
        <Route exact path="/vendor" render={() => <Vendor />} />
        <Route exact path="/sampleuser" render={() => <Userdashboard />} />
        <Route exact path="/vendor/:vendorName" render={() => <Chat />} />
        {/* <Route exact path="/Wings" render={() => <Chat />} />
 <Route exact path="/Wendys" render={() => <Chat />} />
 <Route exact path="/Arbys"  render={() => <Chat />} />
 <Route exact path="/Arbys" props="Arbys" render={() => <Chat />} /> */}
 <Marker />


      </div>
    </Router>

  );
}


export default App;