import {Switch, Route} from 'react-router-dom';
import Homepage from './homepage';
import Nextpage from '../Nextpage/nextpage';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = {"/"} component= {Homepage}/>
            <Route path={"/:id"} component={Nextpage} />
            
        </Switch>
    )
}

export default Routes;



