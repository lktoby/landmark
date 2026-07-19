"use client";
import { useFormatter } from "next-intl";
import { Calendar } from "@/components/ui/calendar";
import Weather from "@/components/weather";
import TodoItem from "@/components/todo";
import Bookmark from "@/components/bookmark";
import React from "react";

export default function Home() {
  const format = useFormatter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-end justify-end m-5">
        <i className="bi bi-gear hover:text-base-content hover:opacity-80 text-2xl"></i>
        {/* TODO: add settings popup menu */}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Weather city="Tokyo"></Weather>
        <div>
          <h2 className="text-2xl italic text-center m-3">Fun fact of the day: do you know that pandas love to sleep?</h2>
        </div>
        {/* bookmarks text */}
        <div className="flex flex-col justify-evenly gap-3 py-2">
          <div className="flex justify-between gap-2">
            <div className="self-start">
              <div className="flex flex-row gap-2 px-2">
                <span className="text-lg font-semibold">Bookmarks</span>
                <i className="bi bi-pencil-square hover:text-base-content hover:opacity-80 text-xl"></i>
                {/* TODO: edit bookmark popup */}
              </div>
            </div>
            <div className="pr-65">
              <span className="text-lg font-semibold">Todos on {format.dateTime(date as Date, { month: "long", day: "numeric" })}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <ul className="list bg-base-100 rounded-box shadow-md w-2xs text-base h-64 overflow-y-auto">
              <Bookmark icon="youtube" title="YouTube"></Bookmark>
              <Bookmark icon="reddit" title="Reddit"></Bookmark>
              <Bookmark icon="github" title="Github"></Bookmark>
              <Bookmark icon="openai" title="ChatGPT"></Bookmark>
              <Bookmark icon="google" title="Google"></Bookmark>
            </ul>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border bg-base-100 border-base-300 shadow-lg rounded-box">
            </Calendar>
            <div className="flex flex-col gap-1 w-sm h-64 overflow-y-auto">
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              {/* TODO: add/edit todo popup menu */}
              <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="rounded-box hover:bg-base-200 focus:outline-1">
                  <span className="text-sm opacity-60 px-45">+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
