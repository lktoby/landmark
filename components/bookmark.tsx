"use client"

function Bookmark({icon, title}) {
    const icon_ref = `bi bi-${icon}`;
    return <li className="list-row hover:bg-base-200">
                <div>
                  <i className={icon_ref}></i>
                </div>
                <span>{title}</span>
            </li>
}

export default Bookmark;