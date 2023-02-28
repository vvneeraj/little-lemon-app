import ReservationCard from "./ReservationCard";

const Reservations = () => {
  const reservations = JSON.parse(localStorage.getItem("reservations"));
  let reservationList;
  if (reservations !== null) {
    let sorted = reservations.sort((a, b) => new Date(a.date) - new Date(b.date));
    reservationList = sorted.map((reservation) => (
      <ReservationCard
        key={`${reservation.date}${reservation.time}`}
        data={reservation}
      />
    ));
  } else {
    reservationList = <p>No reservations found</p>;
  }
  return (
    <section className="gutter">
      <div>
        <span className="title font-40">Reservations</span>
      </div>
      {reservationList}
    </section>
  );
};

export default Reservations;
