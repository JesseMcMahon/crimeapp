import { Route, BrowserRouter as Router } from "react-router-dom"
import Homepage from "./Components/Homepage/Homepage"
import OpenInvestigations from "./Components/OpenInvestigations/OpenInvestigations"
import Mission from "./Components/Mission/Mission"

function App() {
  return (
   <Router>
     <Route exact path="/" component={Homepage} />
     <Route exact path="/openinvestigations" component={OpenInvestigations} />
     <Route exact path="/mission" component={Mission} />
   </Router>
  );
}

export default App;
