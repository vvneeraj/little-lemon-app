import Card from "./Card";

const Specials = () => {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: require("../images/greek salad.jpg"),
    },
    {
      id: 2,
      name: "Bruchetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: require("../images/bruchetta.png"),
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: 5.00,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: require("../images/lemon dessert.jpg"),
    },
  ];

  return (
    <section className="specials-section gutter">
      <div className="specials-header">
        <span className="title font-40">This weeks specials!</span>
        <button className="cta btn-yellow">Online Menu</button>
      </div>
      <section className="specials">
        {specials.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </section>
    </section>
  );
};

export default Specials;
