import { useState } from "react";
import DatePicker from "react-datepicker";
import "./DateSelect.scss";

import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({ selectedDate, onDateSelect }: any) => {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleDateChange = (date: Date) => {
    setStartDate(date);
    onDateSelect(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      className="custom-datepicker w-full py-2 px-6"
      dropdownMode="select"
    />
  );
};

export default DateSelect;
