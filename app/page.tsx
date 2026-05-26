"use client";
import { useNow, useFormatter } from "next-intl";
import dynamic from "next/dynamic";
import Weather from "@/components/weather";

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
        {/* TODO: convert this stack of code into its own components */}
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
            {/* Bookmarks */}
            <ul className="list bg-base-100 rounded-box shadow-md w-2xs">
              <li className="list-row">
                <div>
                  <i className="bi bi-play-btn-fill"></i>
                </div>
                <span>YouTube</span>
              </li>
              <li className="list-row">
                <div>
                  <i className="bi bi-reddit"></i>
                </div>
                <div>
                  <span>Reddit</span>
                </div>
              </li>
              <li className="list-row">
                <div>
                  <i className="bi bi-github"></i>
                </div>
                <div>
                  <span>GitHub</span>
                </div>
              </li>
              <li className="list-row">
                <div>
                  <i className="bi bi-twitter"></i>
                </div>
                <div>
                  <span>Twitter</span>
                </div>
              </li>
              <li className="list-row">
                <div>
                  <i className="bi bi-openai"></i>
                </div>
                <div>
                  <span>ChatGPT</span>
                </div>
              </li>
            </ul>
            <Calendar></Calendar>
            {/* todo list */}
            <div className="flex flex-col gap-1 w-xs">
              <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="list-row">
                  <div>
                    <div className="text-base font-semibold">some title</div>
                    <div className="text-xs opacity-60">some description</div>
                  </div>
                  <div className="flex justify-end items-center">
                    <input type="checkbox" className="checkbox" />
                  </div>
                </li>
              </ul>
              <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="list-row">
                  <div>
                    <div className="text-base font-semibold">some title</div>
                    <div className="text-xs opacity-60">some description</div>
                  </div>
                  <div className="flex justify-end items-center">
                    <input type="checkbox" className="checkbox" />
                  </div>
                </li>
              </ul>
              <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="list-row">
                  <div>
                    <div className="text-base font-semibold">some title</div>
                    <div className="text-xs opacity-60">some description</div>
                  </div>
                  <div className="flex justify-end items-center">
                    <input type="checkbox" className="checkbox" />
                  </div>
                </li>
              </ul>
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
