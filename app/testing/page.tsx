"use client";
import React from "react";
import { DatePicker } from "@nextui-org/date-picker";
import Image from "next/image";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Select, SelectItem } from "@nextui-org/select";

const room_package = [
  {
    name: "Entire Venue / Any Room",
    value: "",
    min_capacity: 5,
    max_capacity: 200,
    min_duration: null,
    max_duration: null,
  },
  {
    name: "Cloud9 Piazza",
    value: 200,
    min_capacity: 100,
    max_capacity: 300,
    min_duration: null,
    max_duration: null,
  },
];

export default function Testing() {
  return (
    <div>
      <div className="bg-red-100 h-[70vh]" />
      <div className="flex gap-4 items-center">
        <DatePicker
          dateInputClassNames={{
            inputWrapper:
              "bg-white focus-within:hover:bg-white hover:bg-white shadow-none border hover:border-secondary-500",
          }}
          radius="sm"
          selectorIcon={
            <CaretDown
              size={18}
              style={{
                minWidth: "15px",
              }}
            />
          }
          startContent={
            <Image
              alt="icon"
              className="w-[20px] h-[20px] object-contain mr-1"
              height={20}
              loading="lazy"
              src="/images/icons/calendar.png"
              width={20}
            />
          }
          variant="flat"
        />

        <div className="w-full">
          <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
            Select Rooms
          </span>
          <Select
            disableAnimation
            aria-label="Select A Room"
            classNames={{
              trigger: "h-[42px] min-h-10 rounded-lg border-1",
            }}
            placeholder="Select A Room"
            popoverProps={{
              offset: 0,
              classNames: {
                base: "before:bg-default-200",
                content: "p-0 border-small border-divider bg-background",
              },
            }}
            selectorIcon={
              <CaretDown
                size={18}
                style={{
                  minWidth: "15px",
                }}
              />
            }
            size="sm"
            startContent={
              <Image
                alt="icon"
                className="w-[20px] h-[20px] object-contain mr-1"
                height={20}
                loading="lazy"
                src="/images/icons/room.png"
                width={20}
              />
            }
            variant="bordered"
            onChange={() => {}}
          >
            {(room_package &&
              room_package.length > 0 &&
              room_package.map((room: any, index: number) => (
                <SelectItem key={room.value} value={room.value}>
                  {room.name}
                </SelectItem>
              ))) || (
              <SelectItem key="readonly" isReadOnly>
                No Options
              </SelectItem>
            )}
          </Select>
        </div>
      </div>
      <div className="bg-blue-100 h-[70vh]" />
    </div>
  );
}
