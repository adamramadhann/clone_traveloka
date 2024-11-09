import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateNav = () => {
    const [startDate, setStartDate] = useState(null); // Tanggal check-in
    const [endDate, setEndDate] = useState(null);     // Tanggal check-out

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                placeholderText="Pilih tanggal check-in dan check-out"
                dateFormat="dd/MM/yyyy"
                className="text-black"
            />
        </div>
    );
}

export default DateNav;
