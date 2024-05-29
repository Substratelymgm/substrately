import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US'; // Import the locale directly
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: 'Contract 1',
    start: new Date(2023, 4, 13),
    end: new Date(2023, 4, 20),
  },
  {
    title: 'Contract 2',
    start: new Date(2023, 5, 6),
    end: new Date(2023, 5, 9),
  },
];

const ContractMonitoringCalendar = () => {
  const [myEvents, _] = useState(events);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Contract Monitoring Calendar</h2>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default ContractMonitoringCalendar;
