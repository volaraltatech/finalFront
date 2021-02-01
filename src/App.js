import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';
import Pilot from './Pilot';
import PilotRegister from './PilotRegister';
import PilotOp from './PilotOp';
import PilotRequestPermission from './PilotRequestPermission';
import PilotRequestInformation from './PilotRequestInformation';
import RequestSent from './RequestSent';
import Government from './Government';
import GovernmentRegister from './GovernmentRegister';
import GovernmentOp from './GovernmentOp';
import Insurance from './Insurance';
import InsuranceRegister from './InsuranceRegister';
import InsuranceOp from './InsuranceOp';
import InsuranceRequestInformation from './InsuranceRequestInformation';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';

function App() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/pilot" component={Pilot} />
              <Route path="/pilotRegister" component={PilotRegister} />
              <Route path="/pilotop" component={PilotOp} />
              <Route path="/pilotrequestpermission" component={PilotRequestPermission} />
              <Route path="/pilotrequestinformation" component={PilotRequestInformation} />
              <Route path="/requestsent" component={RequestSent} />
              <Route path="/government" component={Government} />
              <Route path="/governmentRegister" component={GovernmentRegister} />
              <Route path="/governmentop" component={GovernmentOp} />
              <Route path="/insurance" component={Insurance} />
              <Route path="/insuranceRegister" component={InsuranceRegister} />
              <Route path="/insuranceop" component={InsuranceOp} />
              <Route path="/insurancerequestinformation" component={InsuranceRequestInformation} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
}

export default App;
