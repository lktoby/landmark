"use client";
import { useNow, useFormatter } from "next-intl";
import dynamic from "next/dynamic";
import Weather from "@/components/weather";
import TodoItem from "@/components/todo";
import Bookmark from "@/components/bookmark";

const Calendar = dynamic(()=>import("@/components/calendar"), {ssr:false});

export default function Home() {
  const now = useNow();
  const format = useFormatter();
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-end justify-end m-5">
        <i className="bi bi-gear hover:text-base-content hover:opacity-80 text-2xl"></i>
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
                <span className="text-lg font-semibold">
                  Bookmarks
                </span>
                <i className="bi bi-pencil-square hover:text-base-content hover:opacity-80 text-xl"></i>
              </div>
            </div>
            <div className="pr-65">
              <span className="text-lg font-semibold">
                Todos on {format.dateTime(now, { month: "long", day: "numeric" })}
              </span>
            </div>
          </div>
          <div className="flex items-stretch gap-4">
            <ul className="list bg-base-100 rounded-box shadow-md w-2xs text-base">
              <Bookmark icon="youtube" title="YouTube"></Bookmark>
              <Bookmark icon="reddit" title="Reddit"></Bookmark>
              <Bookmark icon="github" title="Github"></Bookmark>
              <Bookmark icon="twitter" title="Twitter"></Bookmark>
              <Bookmark icon="openai" title="ChatGPT"></Bookmark>
              <Bookmark icon="google" title="Google"></Bookmark>
            </ul>
            <Calendar></Calendar>
            <div className="flex flex-col gap-1 w-xs">
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="rounded-box hover:bg-base-200 focus:outline-1">
                  <div>
                    <span className="text-xs px-40 opacity-60">+</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}
