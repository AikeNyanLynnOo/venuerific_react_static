"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import {
  checkAvailability,
  getVenueCalendarInfo,
} from "@/utils/venueApiFunctions";
import { useRouter } from "next/navigation";
import { CalendarModal } from "../molecules/modals/CalendarModal";
import { useVenueCalendarStore } from "@/store/venue-calendar-store";
import { useDisclosure } from "@nextui-org/modal";

interface WhiteLabelScheduleProps {
  params?: any;
  headerFooterRes?: any;
  cookies?: any;
}

export const WhiteLabelSchedule = ({
  params,
  headerFooterRes,
  cookies,
}: WhiteLabelScheduleProps) => {
  const schedule = [
    { day: "Mon", time: "08.00 am - 09.00 pm" },
    { day: "Tue", time: "08.00 am - 09.00 pm" },
    { day: "Wed", time: "08.00 am - 09.00 pm" },
    { day: "Thu", time: "08.00 am - 09.00 pm" },
    { day: "Fri", time: "08.00 am - 09.00 pm" },
    { day: "Sat", time: "08.00 am - 09.00 pm" },
    { day: "Sun", time: "08.00 am - 09.00 pm" },
    { day: "Holidays", time: "Closed" },
  ];

  const router = useRouter();

  // calendar modal
  const calendarModal = useDisclosure();

  // use venue calendar store
  const venueCalendarStore = useVenueCalendarStore();

  // handle click , call calendar
  const handleCalendar = async (start: string, end: string) => {
    venueCalendarStore.setLoading(true);

    try {
      const { status, statusText, success, message, data, meta } =
        await getVenueCalendarInfo({
          country: (params.country || "sg") as string,
          cookies,
          id: params.venue_slug,
          start,
          end,
        });

      if (!success && status === 401) {
        //401
        return router.push("/login");
      }

      if (data && data.redirect_to) {
        // redirect to
        return router.push(data.redirect_to);
      }

      if (!success) {
        throw new Error(message || "Failed to fetch data");
      }

      venueCalendarStore.setLoading(false);
      venueCalendarStore.setErr(null);

      const { country, config, legend, country_long, current_user } = {} as any;

      if (country) {
        venueCalendarStore.setCountry(country);
      }
      if (config && Object.keys(config).length > 0) {
        venueCalendarStore.setConfig(config);
      }
      if (legend && legend.length > 0) {
        venueCalendarStore.setLegend(legend);
      }
      if (data.data && data.data.length > 0) {
        venueCalendarStore.setData(data.data);
      }
      if (country_long) {
        venueCalendarStore.setCountryLong(country_long);
      }
      if (current_user) {
        venueCalendarStore.setCurrentUser(current_user);
      }
    } catch (error: any) {
      // err
      venueCalendarStore.setLoading(false);
      venueCalendarStore.setErr(error);
    }
  };

  return (
    <div className="border border-secondary-200 rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full flex-shrink-0 mr-4">
            <img
              src="/images/white_label/agustine_img.webp"
              alt="Host Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-[12px] font-medium text-secondary-400">Host</h4>
            <p className="text-[18px] font-semibold text-black">Agustine T.</p>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-[12px] font-medium text-secondary-400">
            Average Response Time
          </h4>
          <p className="text-[16px] font-semibold text-black">19 Hours</p>
        </div>
      </div>

      <Button
        onClick={calendarModal.onOpen}
        variant="bordered"
        className="w-full mb-6 rounded-lg border border-secondary-300 text-secondary-700 text-[14px] font-semibold flex items-center justify-center gap-2 bg-transparent hover:bg-gray-100"
      >
        <img
          src="/images/icons/calendar-date.webp"
          alt="Calendar Icon"
          className="w-[20px] h-[20px] object-contain"
        />
        Check Availability
      </Button>

      <div>
        <div className="flex items-center mb-4">
          <h3 className="text-xs font-medium text-[#9FA9B4]">Open schedule</h3>
          <div className="flex-grow border-t border-secondary-200 ml-2" />
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {schedule.map(({ day, time }) => (
            <div key={day} className="p-2 bg-[#F7FAFC] rounded-lg">
              <span className="text-[14px] text-[#9FA9B4] font-semibold">
                {day}
              </span>
              <span className="text-black mt-1 block">{time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <Button
          variant="light"
          className="bg-primary-100 rounded-lg px-4 py-2 w-full flex items-center justify-center gap-2"
        >
          <span className="text-[14px] font-semibold text-secondary-700">
            View Venue at
          </span>
          <img
            src="/images/white_label/venuerific_logo.webp"
            alt="Venuerific Logo"
            className="w-[87px] h-[20px] object-contain"
          />
        </Button>
      </div>

      <CalendarModal
        data={venueCalendarStore.data}
        err={venueCalendarStore.err}
        handleCalendar={handleCalendar}
        isOpen={calendarModal.isOpen}
        legend={venueCalendarStore.legend}
        loading={venueCalendarStore.loading}
        placement={"bottom-center"}
        onOpenChange={calendarModal.onOpenChange}
      />
    </div>
  );
};

export default WhiteLabelSchedule;
