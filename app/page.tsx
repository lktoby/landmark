"use client";
import { useFormatter } from "next-intl";
import { Calendar } from "@/components/ui/calendar";
import Weather from "@/components/weather";
import TodoItem from "@/components/todo";
import Bookmark from "@/components/bookmark";
import { useState, useRef } from "react";
import BookmarkEditModal from "@/components/bookmark_popup";
import TodoEditModal from "@/components/todo_popup";

export default function Home() {
  const format = useFormatter();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const bookmarksEditRef = useRef<HTMLDialogElement>(null) ;
  const todoRef = useRef<HTMLDialogElement>(null);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-end justify-end m-5">
        <button className="bi bi-gear hover:text-base-content hover:opacity-80 cursor-pointer text-2xl"></button>
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
                <button
                  className="bi bi-pencil-square hover:text-base-content hover:opacity-80 text-xl cursor-pointer"
                  onClick={() => {
                    if (bookmarksEditRef.current) bookmarksEditRef.current.showModal();
                  }}></button>
                <BookmarkEditModal ref={bookmarksEditRef}></BookmarkEditModal>
              </div>
            </div>
            <div className="pr-65">
              <span className="text-lg font-semibold">Todos on {format.dateTime(date as Date, { month: "long", day: "numeric" })}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <ul className="list bg-base-100 rounded-box shadow-md w-3xs text-base h-64 overflow-y-auto">
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
              className="rounded-lg border bg-base-100 border-base-300 shadow-lg rounded-box"></Calendar>
            <div className="flex flex-col gap-1 h-64 w-xs overflow-y-auto">
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <button
                className="w-2xs bg-base-100 hover:bg-base-200 rounded-box shadow-md cursor-pointer text-sm opacity-60"
                onClick={() => {
                  if (todoRef.current) todoRef.current.showModal();
                }}>
                +
              </button>
              <TodoEditModal ref={todoRef}></TodoEditModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
