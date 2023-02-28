import BookingForm from "./BookingForm";
import { useReducer, useContext } from "react";
import { fetchAPI, submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";
import { BookingContext, BookingDispatcherContext } from "../App";

const BookingPage = () => {
  const navigate = useNavigate();

  const bookingSlots = useContext(BookingContext);
  const bookingDispatcher = useContext(BookingDispatcherContext);

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "change_date":
        const freeTimeSlots = fetchAPI(new Date(action.payload.date));
        return (state = freeTimeSlots);
      default:
        throw new Error("Invalid type!");
    }
  };

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submit = (data) => {
    submitAPI(data);
    bookingDispatcher({
      type: "add_booking",
      payload: data,
    });
    return navigate("/booking_confirmation");
  };

  return (
    <section className="booking-page gutter">
      <article>
        <div>
          <span className="title font-40">Reserve a Table</span>
        </div>
        <BookingForm
          submitHandler={submit}
          availableTimes={availableTimes}
          dispatchHandler={dispatch}
        />
      </article>
    </section>
  );
};

export default BookingPage;
