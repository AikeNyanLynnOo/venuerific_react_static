import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";
import tippy from "tippy.js";

import { Loading } from "../atoms/Loading";

interface AvailabilityCalendarProps {
  legend?: any[];
  data?: any[];
  handleCalendar: (start: string, end: string) => void;
  loading?: boolean;
  err?: any;
}

export const AvailabilityCalendar = ({
  legend,
  data,
  handleCalendar,
  loading,
  err,
}: AvailabilityCalendarProps) => {
  const previousDateRange = useRef<{ startStr: string; endStr: string } | null>(
    null,
  );

  const handleDateChange = (arg: {
    start: Date;
    end: Date;
    startStr: string;
    endStr: string;
  }) => {
    // Check if the new dates are different from the previous ones
    if (
      !previousDateRange.current ||
      previousDateRange.current.startStr !== arg.startStr ||
      previousDateRange.current.endStr !== arg.endStr
    ) {
      // Update the reference to the new date range
      previousDateRange.current = {
        startStr: arg.startStr,
        endStr: arg.endStr,
      };
      handleCalendar(arg.startStr || "", arg.endStr || "");
    }
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
          <Loading />
        </div>
      )}
      <FullCalendar
        buttonText={{
          dayGridMonth: "Month",
          timeGridWeek: "Week",
          timeGridDay: "Day",
          listWeek: "List",
          today: "Today",
        }}
        datesSet={handleDateChange} // This triggers on date range change
        dayMaxEvents={2}
        eventDidMount={function (info) {
          tippy(info.el, {
            content: info.event.extendedProps.description || info.event.title, // Tooltip content
            placement: "top", // Tooltip position
            theme: "custom-tooltip", // Tooltip theme (can be customized)
            arrow: true, // Adds an arrow to the tooltip
          });
        }}
        eventMaxStack={1}
        events={
          //     [
          //     {
          //       title: "Long Event",
          //       start: "2024-10-07",
          //       end: "2024-10-10",
          //     },
          //     {
          //       groupId: "999",
          //       title: "Repeating Event",
          //       start: "2024-10-09T16:00:00+00:00",
          //     },
          //     {
          //       groupId: "999",
          //       title: "Repeating Event",
          //       start: "2024-10-16T16:00:00+00:00",
          //     },
          //     {
          //       title: "Conference",
          //       start: "2024-10-19",
          //       end: "2024-10-21",
          //     },
          //     {
          //       title: "Meeting",
          //       start: "2024-10-20T10:30:00+00:00",
          //       end: "2024-10-20T12:30:00+00:00",
          //     },
          //     {
          //       title: "Lunch",
          //       start: "2024-10-20T12:00:00+00:00",
          //     },
          //     {
          //       title: "Birthday Party",
          //       start: "2024-10-21T07:00:00+00:00",
          //     },
          //   ]
          // [
          //   {
          //     title: "Reserved a",
          //     event_name: "Reserved",
          //     start: "2024-07-25T18:00:00",
          //     end: "2024-07-25T21:00:00",
          //     date_description: "Thursday, July 25 18:00 - 21:00",
          //     show_info: false,
          //     description: " - Thursday, July 25 18:00 - 21:00 - Reserved",
          //   },
          //   {
          //     title: "Reserved b",
          //     event_name: "Reserved",
          //     start: "2024-06-30T18:00:00",
          //     end: "2024-06-30T22:00:00",
          //     date_description: "Sunday, June 30 18:00 - 22:00",
          //     show_info: false,
          //     description: " - Sunday, June 30 18:00 - 22:00 - Reserved",
          //   },
          //   {
          //     title: "Reserved c",
          //     event_name: "Reserved",
          //     start: "2024-06-30T12:00:00",
          //     end: "2024-06-30T16:00:00",
          //     date_description: "Sunday, June 30 12:00 - 16:00",
          //     show_info: false,
          //     description: " - Sunday, June 30 12:00 - 16:00 - Reserved",
          //   },
          //   {
          //     title: "Reserved c",
          //     event_name: "Reserved",
          //     start: "2024-06-30T12:00:00",
          //     end: "2024-06-30T16:00:00",
          //     date_description: "Sunday, June 30 12:00 - 16:00",
          //     show_info: false,
          //     description: " - Sunday, June 30 12:00 - 16:00 - Reserved",
          //   },
          //   {
          //     title: "Reserved c",
          //     event_name: "Reserved",
          //     start: "2024-06-30T12:00:00",
          //     end: "2024-06-30T16:00:00",
          //     date_description: "Sunday, June 30 12:00 - 16:00",
          //     show_info: false,
          //     description: " - Sunday, June 30 12:00 - 16:00 - Reserved",
          //   },
          //   {
          //     title: "Reserved c",
          //     event_name: "Reserved",
          //     start: "2024-06-30T12:00:00",
          //     end: "2024-06-30T16:00:00",
          //     date_description: "Sunday, June 30 12:00 - 16:00",
          //     show_info: false,
          //     description: " - Sunday, June 30 12:00 - 16:00 - Reserved",
          //   },
          //   {
          //     title: "Reserved c",
          //     event_name: "Reserved",
          //     start: "2024-06-30T12:00:00",
          //     end: "2024-06-30T16:00:00",
          //     date_description: "Sunday, June 30 12:00 - 16:00",
          //     show_info: false,
          //     description: " - Sunday, June 30 12:00 - 16:00 - Reserved",
          //   },
          // ]
          // [
          //   {
          //     title: "Reserved",
          //     event_name: "Reserved",
          //     start: "2024-10-30T06:00:00",
          //     end: "2024-10-30T07:00:00",
          //     date_description: "Wednesday, October 30 06:00 - 07:00",
          //     show_info: false,
          //     description: " - Wednesday, October 30 06:00 - 07:00 - Reserved",
          //   },
          //   {
          //     title: "Reserved",
          //     event_name: "Reserved",
          //     start: "2024-10-29T19:30:00",
          //     end: "2024-10-29T21:30:00",
          //     date_description: "Tuesday, October 29 19:30 - 21:30",
          //     show_info: false,
          //     description: " - Tuesday, October 29 19:30 - 21:30 - Reserved",
          //   },
          //   {
          //     title: "Reserved",
          //     event_name: "Reserved",
          //     start: "2024-10-29T07:30:00",
          //     end: "2024-10-29T10:30:00",
          //     date_description: "Tuesday, October 29 07:30 - 10:30",
          //     show_info: false,
          //     description: " - Tuesday, October 29 07:30 - 10:30 - Reserved",
          //   },
          //   {
          //     title: "Reserved",
          //     event_name: "Reserved",
          //     start: "2024-10-28T06:00:00",
          //     end: "2024-10-28T07:00:00",
          //     date_description: "Monday, October 28 06:00 - 07:00",
          //     show_info: false,
          //     description: " - Monday, October 28 06:00 - 07:00 - Reserved",
          //   },
          //   {
          //     title: "Reserved",
          //     event_name: "Reserved",
          //     start: "2024-04-04T15:00:00",
          //     end: "2024-04-04T18:00:00",
          //     date_description: "Thursday, April 04 15:00 - 18:00",
          //     show_info: false,
          //     description: " - Thursday, April 04 15:00 - 18:00 - Reserved",
          //   },
          //   {
          //     title: "Reserved",
          //     event_name: "Reserved",
          //     start: "2024-07-06T10:00:00",
          //     end: "2024-07-06T14:00:00",
          //     date_description: "Saturday, July 06 10:00 - 14:00",
          //     show_info: false,
          //     description: " - Saturday, July 06 10:00 - 14:00 - Reserved",
          //   },
          //   {
          //     room_name: "Cloud9 Piazza",
          //     event_name: "Unavailable",
          //     title: "Unavailable",
          //     start: "2020-03-25T00:00:00",
          //     end: "2020-05-05T00:00:00",
          //     date_description:
          //       "Wednesday, March 25 00:00 - </br>Tuesday, May 05 00:00",
          //     description: "Unavailable",
          //     color: "#F72585",
          //   },
          //   {
          //     room_name: "Changi Lounge Meeting Room",
          //     event_name: "Unavailable",
          //     title: "Unavailable",
          //     start: "2020-04-04T08:00:00",
          //     end: "2020-05-05T00:00:00",
          //     date_description:
          //       "Saturday, April 04 08:00 - </br>Tuesday, May 05 00:00",
          //     description: "Unavailable",
          //     color: "#55b95d",
          //   },
          //   {
          //     room_name: "Changi Experience Studio Buyout",
          //     event_name: "Unavailable",
          //     title: "Unavailable",
          //     start: "2020-03-25T00:00:00",
          //     end: "2020-05-05T00:00:00",
          //     date_description:
          //       "Wednesday, March 25 00:00 - </br>Tuesday, May 05 00:00",
          //     description: "Unavailable",
          //     color: "#FFBE0B",
          //   },
          //   {
          //     room_name: "Changi Experience Studio Event Space",
          //     event_name: "Unavailable",
          //     title: "Unavailable",
          //     start: "2020-03-25T00:00:00",
          //     end: "2020-05-05T00:00:00",
          //     date_description:
          //       "Wednesday, March 25 00:00 - </br>Tuesday, May 05 00:00",
          //     description: "Unavailable",
          //     color: "#3A86FF",
          //   },
          //   {
          //     room_name: "Changi Experience Studio Seminar Room",
          //     event_name: "Unavailable",
          //     title: "Unavailable",
          //     start: "2020-04-04T08:00:00",
          //     end: "2020-05-05T00:00:00",
          //     date_description:
          //       "Saturday, April 04 08:00 - </br>Tuesday, May 05 00:00",
          //     description: "Unavailable",
          //     color: "#38A3A5",
          //   },
          //   {
          //     room_name: "Jewel & Changi Airport Event Spaces",
          //     event_name: "Unavailable",
          //     title: "Unavailable",
          //     start: "2020-04-30T00:00:00",
          //     end: "2020-05-05T00:00:00",
          //     date_description:
          //       "Thursday, April 30 00:00 - </br>Tuesday, May 05 00:00",
          //     description: "Unavailable",
          //     color: "#4361EE",
          //   },
          //   {
          //     room_name: "Jewel & Changi Airport Event Spaces",
          //     event_name: "Unavailable",
          //     title: "Unavailable",
          //     start: "2020-05-05T00:00:00",
          //     end: "2020-06-02T00:00:00",
          //     date_description:
          //       "Tuesday, May 05 00:00 - </br>Tuesday, June 02 00:00",
          //     description: "Unavailable",
          //     color: "#4361EE",
          //   },
          //   {
          //     room_name: "Valley View Private Suite ",
          //     event_name: "Unavailable",
          //     title: "Unavailable",
          //     start: "2024-10-30T00:00:00",
          //     end: "2024-10-30T03:00:00",
          //     date_description: "Wednesday, October 30 00:00 - 03:00",
          //     description: "Unavailable",
          //     color: "#91A1AE",
          //   },
          // ]
          data || []
        }
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        validRange={{
          start: new Date(),
        }}
      />
    </div>
  );
};
