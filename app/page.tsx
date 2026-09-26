"use client";
import { useFormatter } from "next-intl";
import { Calendar } from "@/components/ui/calendar";
import Weather from "@/components/weather";
import TodoItem from "@/components/todo";
import Bookmark from "@/components/bookmark";
import { useState, useRef } from "react";
import BookmarkEdit from "@/components/bookmark_edit";


export default function Home() {
  const format = useFormatter();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const bookmarksEditRef = useRef<HTMLDialogElement | null>(null);
  const todoRef = useRef<HTMLDialogElement | null>(null);
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
                <button
                  className="bi bi-pencil-square hover:text-base-content hover:opacity-80 text-xl cursor-pointer"
                  onClick={() => {
                    if (bookmarksEditRef.current) bookmarksEditRef.current.showModal();
                  }}></button>
                <dialog className="modal" ref={bookmarksEditRef}>
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit bookmarks</h3>
                    <p className="py-4">Click to edit URL</p>
                    <ul className="list bg-base-100 rounded-box shadow-md text-base h-64 overflow-y-auto">
                      <BookmarkEdit icon="youtube" title="YouTube" url="https://www.youtube.com"></BookmarkEdit>
                      <BookmarkEdit icon="reddit" title="Reddit" url="https://www.reddit.com/"></BookmarkEdit>
                      <BookmarkEdit icon="github" title="Github" url="https://github.com/"></BookmarkEdit>
                      <BookmarkEdit icon="openai" title="ChatGPT" url="https://chatgpt.com/"></BookmarkEdit>
                      <BookmarkEdit icon="google" title="Google" url="https://google.com/"></BookmarkEdit>
                    </ul>
                    <div className="modal-action">
                      <form method="dialog" className="grid grid-cols-5 gap-2">
                        <button className="bi bi-plus-lg col-start-1 col-end-2 bg-base-100 text-base hover:text-base-content hover:opacity-80 cursor-pointer"></button>
                        <button className="btn col-start-4 col-end-5 bg-base-100 text-base">Cancel</button>
                        <button className="btn col-start-5 col-end-6 bg-base-100 text-base">Save</button>
                      </form>
                    </div>
                  </div>
                </dialog>
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
            </div>
          </div>
          <dialog ref={todoRef} className="modal">
            <div className="modal-box flex flex-col items-center">
              <h3 className="font-bold text-lg">Add New Todo Item</h3>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <fieldset className="fieldset gap-2">
                <label className="label">Title</label>
                <input type="text" className="input" placeholder="Title" />
                <label className="label">Date & Time</label>
                <input type="datetime-local" className="input" />
                <label className="label">Description</label>
                <textarea className="textarea" placeholder="Todo description..."></textarea>
                <button className="btn rounded-xl" onClick={() => {
                  if (todoRef.current) todoRef.current.close();
                }}>Save</button>
              </fieldset>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}
