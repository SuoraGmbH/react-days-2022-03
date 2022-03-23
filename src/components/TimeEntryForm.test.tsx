import { render, screen } from "@testing-library/react";
import TimeEntryForm from "./TimeEntryForm";
import userEvent from "@testing-library/user-event";

describe("<TimeEntryForm />", () => {
  test("renders without event handler", () => {
    render(<TimeEntryForm />);
  });
  test("renders with event handler", () => {
    render(<TimeEntryForm onNewTimeEntry={() => {}} />);
  });

  test("after typing into the input box, the content is visible somewhere", () => {
    const { container } = render(<TimeEntryForm onNewTimeEntry={() => {}} />);
    const textfield = screen.getByRole("textbox");
    userEvent.type(textfield, "Hallo Alexander!");
    screen.getByText(/hallo alexander!/i);
  });

  test("after typing into the input box and clicking the submit button, the event is fired", () => {
    const handleNewTimeEntryMock = jest.fn();
    const { container } = render(
      <TimeEntryForm onNewTimeEntry={handleNewTimeEntryMock} />
    );
    const textfield = screen.getByRole("textbox");
    userEvent.type(textfield, "Hallo Alexander!");

    const submitButton = screen.getByRole("button", {
      name: /absenden/i,
    });

    userEvent.click(submitButton);

    expect(handleNewTimeEntryMock).toHaveBeenCalledTimes(1);
  });

  test("after typing into the input box and pressing enter, the event is fired", () => {
    const handleNewTimeEntryMock = jest.fn();
    const { container } = render(
      <TimeEntryForm onNewTimeEntry={handleNewTimeEntryMock} />
    );
    const textfield = screen.getByRole("textbox");
    userEvent.type(textfield, "Hallo Alexander!{enter}");

    const submitButton = screen.getByRole("button", {
      name: /absenden/i,
    });

    expect(handleNewTimeEntryMock).toHaveBeenCalledTimes(1);
    expect(handleNewTimeEntryMock).toHaveBeenCalledWith(
      expect.objectContaining({
        comment: "Hallo Alexander!",
      })
    );
  });
});
