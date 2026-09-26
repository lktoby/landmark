"use client"

function TodoItem() {
    return <ul className="list w-2xs bg-base-100 rounded-box shadow-md">
                <li className="list-row hover:bg-base-200">
                    <div>
                        <div className="text-base font-semibold">some title</div>
                        <div className="text-xs opacity-60">some description</div>
                    </div>
                    <div className="flex justify-end items-center">
                        <input type="checkbox" className="checkbox" />
                    </div>
                </li>
            </ul>
}

export default TodoItem;