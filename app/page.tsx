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
      <div className="flex items-end justify-end m-4">
        <i className="bi bi-gear"></i>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-2">
        <div className="flex flex-col w-full max-w-3xl items-center justify-between">
          <Weather city="Tokyo"></Weather>
        </div>
        <div>
          <h2 className="text-2xl italic font-medium text-center">Fun fact of the day: do you know that pandas love to sleep?</h2>
        </div>
        {/* TODO: convert this stack of code into its own components */}
        {/* bookmarks text */}
        <div className="flex flex-col items-center sm:items-start sm:text-left">
          <div className="grid grid-cols-8 gap-2">
            <div className="text-center">
              <div className="flex flex-row items-center gap-2">
                <span className="max-w-xs text-xl font-medium leading-15 tracking-tight text-black dark:text-zinc-50">
                  Bookmarks
                </span>
                <i className="bi bi-pencil-square"></i>
              </div>
            </div>
            <div className="col-span-7 text-center sm:flex-row">
              <span className="max-w-xs text-xl font-medium leading-15 tracking-tight text-black dark:text-zinc-50">
                Todos on {format.dateTime(now, { month: "long", day: "numeric" })}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {/* Bookmarks column starts here */}
            <div className="col-span-2">
              <ul className="list bg-base-100 rounded-box shadow-md">
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
            </div>
            {/* calendar */}
            <div className="col-span-2">
              <Calendar></Calendar>
            </div>
            {/* todo list */}
            <div className="col-span-2">
              <div className="flex flex-col gap-1">
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
                  <li className="list-row flex text-center text-xs opacity-60">
                    <div className="grow">
                      +
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div></div>
);
}
