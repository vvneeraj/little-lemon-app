const TestimonialCard = ({ data }) => {
  const renderStars = () => {
    let starts = [];
    for (let i = 0; i < data.rating; i++) {
      starts.push("⭐");
    }
    return starts;
  };

  return (
    <article className="testimonial-card">
      <div className="rating">{renderStars()}</div>
      <div className="image">
        <img src={data.image} />
      </div>
      <div className="description">
        <p><strong>{data.name}</strong></p>
        <q>{data.description}</q>
      </div>
    </article>
  );
};

export default TestimonialCard;
