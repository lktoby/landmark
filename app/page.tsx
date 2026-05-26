"use client";
import Image from "next/image";
import { useNow, useFormatter } from "next-intl";
import dynamic from "next/dynamic";

const Calendar = dynamic(()=>import("@/components/calendar"), {ssr:false});

export default function Home() {
  const now = useNow();
  const format = useFormatter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <div className="flex flex-col w-full max-w-3xl items-center justify-between bg-white dark:bg-black">
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <Image
              src="https://placehold.co/200"
              alt="weather image"
              width={200}
              height={200}
              unoptimized
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title">0°C in Hong Kong</h1>
            <div className="card-actions">
              <p>insert weather description. your mom says you should wear a jacket.</p>
              {/* TODO: put some kinda ai here to generate weather advice from an asian mom (?) */}
            </div>
            <div className="flex justify-end">
              <button className="btn btn-primary">more</button>
            </div>
          </div>
        </div>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg>
            </div>
          </div>
          <div className="col-span-7 text-center sm:flex-row">
            <span className="max-w-xs text-xl font-medium leading-15 tracking-tight text-black dark:text-zinc-50">
              Todos on {format.dateTime(now, {month: "long", day: "numeric"})}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {/* Bookmarks column starts here */}
          <div className="col-span-2">
            <ul className="list bg-base-100 rounded-box shadow-md">
              <li className="list-row">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-btn-fill" viewBox="0 0 16 16">
                    <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                  </svg>
                </div>
                <span>YouTube</span>
              </li>
              <li className="list-row">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-reddit" viewBox="0 0 16 16">
                    <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165"/>
                  </svg>
                </div>
                <div>
                  <span>Reddit</span>
                </div>
              </li>
              <li className="list-row">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </div>
                <div>
                  <span>GitHub</span>
                </div>
              </li>
              <li className="list-row">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                  </svg>
                </div>
                <div>
                  <span>Twitter</span>
                </div>
              </li>
              <li className="list-row">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-openai" viewBox="0 0 16 16">
                    <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z"/>
                  </svg>
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
    </div>
);
}
