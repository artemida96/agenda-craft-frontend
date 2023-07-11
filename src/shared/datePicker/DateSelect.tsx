import  { useState } from "react";
import DatePicker from "react-datepicker";
import  './DateSelect.scss';


import "react-datepicker/dist/react-datepicker.css";

const DateSelect = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date!)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      className="custom-datepicker w-full py-2 px-6"
      dropdownMode="select"
    />
  );
  };
export default DateSelect;