import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Appointments from "./Components/Appointments";
import Confirmed from "./Components/Confirmed";
import Failed from "./Components/Failed";
import Feedback from "./Components/Feedback";
import Pushed from "./Components/Pushed";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-4"><Sidebar/></div>
        <div className="col-8">
          <div>
            scrollable
          </div>
          <div>
          <Router>           
            <Switch>
              {/* <Route path="/general" component={} /> */}
              <Route path="/appointments" component={Appointments} />
              <Route path="/confirmed" component={Confirmed} />
              <Route path="/failed" component={Failed} />
              <Route path="/feedback" component={Feedback} />
              <Route path="/pushed" component={Pushed} />
            </Switch>
          </Router>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
