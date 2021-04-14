import {Switch, Route} from 'react-router-dom';
import Films from './links/films';
import Species from './links/species';
import Planets from './links/planets';
import People from './links/people';
import Starship from './links/starship';
import Vehicles from './links/vehicles';
import TermsOfUse from './links/termsOfUse';
import LegalNotices from './links/legalNotices';
import PrivacyPolicy from './links/privacyPolicy';
import Helpdesk from './links/helpDesk';
import DisneyStore from './links/disneyStore';
import Homepage from './homepage';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = {"/"} component= {Homepage}/>
            <Route exact path = {"/films"} component= {Films}/>
            <Route exact path = {"/species"} component= {Species}/>
            <Route exact path = {"/planets"} component= {Planets}/>
            <Route exact path = {"/people"} component= {People}/>
            <Route exact path = {"/starship"} component= {Starship}/>
            <Route exact path = {"/vehicles"} component= {Vehicles}/>
            <Route exact path = {"/termsofuse"} component= {TermsOfUse}/>
            <Route exact path = {"/legalnotices"} component= {LegalNotices}/>
            <Route exact path = {"/privacypolicy"} component= {PrivacyPolicy}/>
            <Route exact path = {"/helpdesk"} component= {Helpdesk}/>
            <Route exact path = {"/disneystore"} component= {DisneyStore}/>
        </Switch>
    )
}

export default Routes;



