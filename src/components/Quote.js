import quoteStyle from './Quote.module.css';

const Quote = () => (
  <div className={quoteStyle.quoteContainer}>
    <h1 className={quoteStyle.quoteTitle}>
      Pure mathematics is, in its way, the poetry of logical ideas.
      — Albert Einstein,
    </h1>
  </div>
);

export default Quote;
