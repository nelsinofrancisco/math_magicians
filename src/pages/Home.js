/* eslint-disable max-len */
import { Route, Switch } from 'react-router-dom';
import Calculator from '../components/Calculator';
import NavBar from '../components/NavBar';
import Quote from './Quote';

const Home = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <div>
          <h1>
            Welcome to our Page
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper viverra elit eu scelerisque. Phasellus cursus felis non velit accumsan faucibus ultrices quis dolor. Suspendisse ex mauris, ultricies id metus id, porta pellentesque justo. Sed pretium, magna vitae interdum consequat, erat dui congue sem, nec pharetra libero sem eu mauris. Proin semper at velit in dignissim. Integer blandit justo in libero varius egestas. Phasellus posuere maximus metus eget pharetra. Nullam faucibus velit sit amet lectus accumsan finibus. Fusce ut aliquam risus, ac rhoncus neque. Fusce et quam in purus egestas posuere at vel urna. Curabitur fringilla augue sit amet convallis vestibulum. Vestibulum mollis lacus et nulla rhoncus blandit nec non eros. Etiam et massa sit amet tortor maximus lacinia. Suspendisse arcu mi, aliquam eget pretium eget, scelerisque quis justo. Duis ac tincidunt eros, vestibulum ultrices purus. Nunc semper mauris in mauris ultricies auctor.
          </p>
        </div>
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
