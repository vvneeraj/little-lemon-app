const ReservationCard = ({ data }) => {
  return (
    <article className="reservation-card">
      <div>Date: {data.date}</div>
      <div>Time: {data.time}</div>
      <div>No. of Guests: {data.guests}</div>
      <div>Occasion: {data.occasion}</div>
    </article>
  );
};

export default ReservationCard;
