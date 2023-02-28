const Card = ({ data }) => {
  return (
    <article>
      <div>
        <img src={data.image} className="card-image" alt={data.name} />
      </div>
      <div className="card-body">
        <div>
          <span className="title">{data.name}</span>
          <span>${data.price}</span>
        </div>
        <p>{data.description}</p>
        <span>Order a delivery </span>
      </div>
    </article>
  );
};

export default Card;
