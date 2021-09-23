/* eslint-disable global-require */
/* eslint-disable max-len */
import homepageStyles from './Homepage.module.css';

// eslint-disable-next-line arrow-body-style
const Homepage = () => {
  return (
    <div key="Homepage" className={homepageStyles.HomepageContainer}>
      <h1 className={homepageStyles.HomepageTitle}>
        Welcome to our Page
      </h1>
      <p className={homepageStyles.HomepageParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper viverra elit eu scelerisque. Phasellus cursus felis non velit accumsan faucibus ultrices quis dolor. Suspendisse ex mauris, ultricies id metus id, porta pellentesque justo. Sed pretium, magna vitae interdum consequat, erat dui congue sem, nec pharetra libero sem eu mauris. Proin semper at velit in dignissim. Integer blandit justo in libero varius egestas. Phasellus posuere maximus metus eget pharetra. Nullam faucibus velit sit amet lectus accumsan finibus. Fusce ut aliquam risus, ac rhoncus neque. Fusce et quam in purus egestas posuere at vel urna. Curabitur fringilla augue sit amet convallis vestibulum. Vestibulum mollis lacus et nulla rhoncus blandit nec non eros. Etiam et massa sit amet tortor maximus lacinia. Suspendisse arcu mi, aliquam eget pretium eget, scelerisque quis justo. Duis ac tincidunt eros, vestibulum ultrices purus. Nunc semper mauris in mauris ultricies auctor.
      </p>
    </div>
  );
};

export default Homepage;
