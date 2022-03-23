import { render, screen } from "@testing-library/react";
import TimeEntryView from "./TimeEntryView";
import { TimeEntry } from "../domain/TimeEntry";

const timeEntry: TimeEntry = {
  id: "123213321",
  comment: "Hallo Jennifer",
  start: new Date("2022-03-23T15:30:30.526Z"),
  end: new Date("2022-03-23T15:45:30.526Z"),
};

describe("<TimeEntryView />", function () {
  test("renders without crashing", () => {
    render(<TimeEntryView timeEntry={timeEntry} />);
  });

  test("renders according to snapshot", () => {
    const { container } = render(<TimeEntryView timeEntry={timeEntry} />);
    expect(container).toMatchSnapshot();
  });

  test("renders the time entries comment", () => {
    render(<TimeEntryView timeEntry={timeEntry} />);
    screen.getByText("hallo Jennifer", { exact: false });
  });
});
