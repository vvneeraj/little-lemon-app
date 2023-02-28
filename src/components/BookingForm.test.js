import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

test("Check booking form submission", async () => {
    const { getByTestId, getByText } = render(<BookingForm availableTimes={[]} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeInput = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionInput = screen.getByLabelText(/occasion/i);
    const button = screen.getByRole('button');

    await act (async () => {
        userEvent.type(dateInput, "01-01-2024");
        userEvent.type(timeInput, "17:00");
        userEvent.type(guestsInput, "5");
        userEvent.selectOptions(occasionInput, "Birthday");
    });
    await act (async () => {
        fireEvent.submit(getByTestId('form'))
    });
});

test("Check client side validation", async () => {
    const { getByTestId, getByText } = render(<BookingForm availableTimes={[]}/>)

    await act (async () => {
      fireEvent.change(screen.getByLabelText(/choose date/i), {
        target: {value: ''},
      });
    });

    await act (async () => {
      fireEvent.submit(getByTestId('form'))
    });

    expect(getByText("Date is required")).toBeInTheDocument();
});