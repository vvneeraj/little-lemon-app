import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import BookingConfirmation from "./components/BookingConfirmation";
import { useReducer, createContext } from "react";
import Reservations from "./components/Reservations";

export const BookingContext = createContext(null);
export const BookingDispatcherContext = createContext(null);

function App() {
  const updateBooking = (state, action) => {
    switch (action.type) {
      case "add_booking":
        let bookings = [
          ...state,
          {
            date: action.payload.date,
            time: action.payload.time,
            guests: action.payload.guests,
            occasion: action.payload.occasion,
          },
        ];

        let reservations = JSON.parse(localStorage.getItem("reservations"));
        
        localStorage.clear();
        
        console.log(reservations);
        localStorage.setItem(
          "reservations",
          reservations !== null
            ? JSON.stringify([
                ...reservations,
                {
                  date: action.payload.date,
                  time: action.payload.time,
                  guests: action.payload.guests,
                  occasion: action.payload.occasion,
                },
              ])
            : JSON.stringify([
                {
                  date: action.payload.date,
                  time: action.payload.time,
                  guests: action.payload.guests,
                  occasion: action.payload.occasion,
                },
              ])
        );
        return bookings;
      default:
        throw new Error("Invalid type!");
    }
  };

  const [bookingSlots, bookingDispatcher] = useReducer(updateBooking, []);

  return (
    <>
      <BookingContext.Provider value={bookingSlots}>
        <BookingDispatcherContext.Provider value={bookingDispatcher}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route
                path="/booking_confirmation"
                element={<BookingConfirmation />}
              />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
          </main>
          <Footer />
        </BookingDispatcherContext.Provider>
      </BookingContext.Provider>
    </>
  );
}

export default App;
