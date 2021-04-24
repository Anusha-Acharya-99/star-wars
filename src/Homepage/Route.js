import {Switch, Route} from 'react-router-dom';
import Homepage from './homepage';
import Nextpage from '../Nextpage/nextpage';
import Thirdpage from '../Thirdpage/thirdpage';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = {"/"} component= {Homepage}/>
            <Route exact path={"/:id"} component={Nextpage} />
            <Route path={"/:id/:id1/"} component = {Thirdpage} />
        </Switch>
    )
}

export default Routes;



