import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ submitHandler, availableTimes, dispatchHandler }) => {
  
  const today = new Date()
  const yesterday = new Date(today)

  yesterday.setDate(yesterday.getDate() - 1)

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "1",
      occasion: "",
    },
    onSubmit: (values) => {
      submitHandler(values);
    },
    validationSchema: Yup.object({
      date: Yup.date().min(yesterday, "Choose a future date").required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Atleast one member is required")
        .max(10, "Maximum 10 guests are allowed")
        .required("No of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit} data-testid='form'>
      <div>
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="form-control"
          onChange={(e) => {
            formik.handleChange(e)
            dispatchHandler({
              type: "change_date",
              payload: { date: e.target.value },
            });
          }}
          value={formik.values.date}
        />
        <label className="error">{formik.errors.date}</label>
      </div>
      <div>
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.time}
        >
          <option>Choose Time</option>
          {availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        <label className="error">{formik.errors.time}</label>
      </div>
      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.guests}
        />
        <label className="error">{formik.errors.guests}</label>
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.occasion}
        >
          <option>Choose Occasion</option>;
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <label className="error">{formik.errors.occasion}</label>
      </div>
      <button type="submit" className="btn-yellow" id="reservation-btn" role="button" aria-label="Make Your reservation">
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm;
