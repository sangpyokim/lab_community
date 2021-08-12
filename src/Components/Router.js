import React from 'react';
import { BrowserRouter as Router, 
    Route, 
    Redirect, 
    Switch
} from 'react-router-dom'
import Detail from '../Routes/Detail'
import Home from '../Routes/Home';
import SWLab from '../Routes/SWLab';
import DBLab from '../Routes/DBLab';
import AILab from '../Routes/AILab';
import NWLab from '../Routes/NWLab';
import VLab from '../Routes/VLab';
import GPLab from '../Routes/GPLab';
import Footer from './Footer';
import Header from './Header';

const AppRouter = () => {
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} ></Route>
                <Route exact path="/get_board/:bno" component={Detail} ></Route>

                <Route exact path="/ailab" component={AILab} ></Route>
                <Route exact path="/get_board_AI/:bno" component={Detail} ></Route>

                <Route exact path="/dblab" component={DBLab} ></Route>
                <Route exact path="/get_board_DB/:bno" component={Detail} ></Route>

                <Route exact path="/swlab" component={SWLab} ></Route>
                <Route exact path="/get_board_software/:bno" component={Detail} ></Route>

                <Route exact path="/nwlab" component={NWLab} ></Route>
                <Route exact path="/get_board_network/:bno" component={Detail} ></Route>

                <Route exact path="/visionlab" component={VLab} ></Route>
                <Route exact path="/get_board_vision/:bno" component={Detail} ></Route>

                <Route exact path="/graphiclab" component={GPLab} ></Route>
                <Route exact path="/get_board_graphics/:bno" component={Detail} ></Route>
            </Switch>
            <Footer />
        </Router>
    )
    
}

export default AppRouter