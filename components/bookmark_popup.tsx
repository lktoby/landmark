import BookmarkEdit from "./bookmark_edit";
import { Ref } from "react";

export default function BookmarkEditModal({ ref, }: {ref: Ref<HTMLDialogElement>}) {
    return (
      <dialog className="modal" ref={ref}>
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
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <button className="bi bi-plus-lg col-start-1 col-end-2 bg-base-100 text-base hover:text-base-content hover:opacity-80 cursor-pointer"></button>
              <button className="btn col-start-4 col-end-5 bg-base-100 text-base">Cancel</button>
              <button className="btn col-start-5 col-end-6 bg-base-100 text-base">Save</button>
            </form>
          </div>
        </div>
      </dialog>
    );
}