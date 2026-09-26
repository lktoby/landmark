import { Ref } from "react";

export default function TodoEditModal({ref}: {ref:Ref<HTMLDialogElement>}) {
    return (
      <dialog ref={ref} className="modal">
        <form className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg">Add New Todo Item</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <fieldset className="fieldset gap-2">
                <label className="label">Title</label>
                <input type="text" className="input" placeholder="Title" />
                <label className="label">Date & Time</label>
                <input type="datetime-local" className="input" />
                <label className="label">Description</label>
                <textarea className="textarea" placeholder="Todo description..."></textarea>
                <button className="btn rounded-xl">Save</button>
            </fieldset>
            </form>
        </form>
      </dialog>
    );
}