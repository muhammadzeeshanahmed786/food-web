import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignInSide from "../components/sign-in";

import ButtonAppBar from "../components/navbar"
import WorkSection from "../components/workSection";
import CarouselImage from "../components/carousel";
import SignUp from "../components/signup/signup";


function ReactRoutes(){
    return(
        <Router>
        
        <Switch>
            <Route exact path="/">
        <ButtonAppBar />
            <CarouselImage/>   
            <WorkSection/>
            </Route>
            <Route  path="/Sign-In">
                <SignInSide />
            </Route>
            <Route  path="/Sign-UP">
                <SignUp />
            </Route>
            </Switch>
        </Router>
    )
};
export default ReactRoutes;