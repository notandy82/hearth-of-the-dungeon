import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {
    const [date, setDate] = useState(new Date());

    return (
        <DatePicker
          placeholderText="Select date and time"
          showTimeSelect
          dateFormat="d MMMM yyyy h:mmaa"
          selected={date}
          onChange={date => setDate(date)}
        />
    );
}