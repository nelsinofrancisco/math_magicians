/* eslint-disable max-len */
import { Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Homepage from './Homepage';
import NavBar from './NavBar';
import Quote from './Quote';

const Home = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>

  </>
);

export default Home;
