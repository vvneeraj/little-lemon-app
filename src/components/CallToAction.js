import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="banner">
      <section className="banner-content gutter">
        <article>
          <span className="title font-40 color-yellow">Little Lemon</span>
          <span className="title font-20 color-white">Chicago</span>
          <p className="font-20 color-white banner-description">
            We are family owned Mediterranean restaurant, focused on traditional
            recepies served with a modern twist
          </p>
          <Link to="/booking" className="cta btn-yellow" aria-label="Reserve a Table">Reserve a Table</Link>
        </article>
        <article>
          <div className="banner-image"></div>
        </article>
      </section>
    </section>
  );
};

export default CallToAction;
