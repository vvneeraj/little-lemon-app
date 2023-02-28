import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      name: "Johns",
      rating: 5,
      description:
        "Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment.",
      image: require("../images/user1.jpeg"),
    },
    {
      id: 2,
      name: "Henrik Kloss",
      rating: 4,
      description:
        "WOW!!! What an outstanding dinner you prepared at the Little Lemon on Friday evening!!! It was an honor for me to be invited and experience firsthand your incredible culinary gift!",
      image: require("../images/user2.jpeg"),
    },
    {
      id: 3,
      name: "Rose Mary",
      rating: 4,
      description:
        "Last Friday I came for restaurant week. It was FABULOUS! The portions were overly generous. Everything was so yummy – what a bargain. I will be back soon.",
      image: require("../images/user3.jpeg"),
    },
  ];

  return (
    <section className="gutter">
      <div>
        <span className="title title-center font-40">Testimonials</span>
      </div>
      <section className="testimonials">
        {testimonials.map((item) => (
          <TestimonialCard data={item} key={item.id} />
        ))}
      </section>
    </section>
  );
};

export default Testimonials;
