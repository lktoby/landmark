"use client";

import React, { useState } from "react";

interface FormState{
    icon: string;
    title: string;
    url: string
}

export default function BookmarkEdit({ icon, title, url }: { icon: string, title: string, url: string}) {
    const [text, setText] = useState<FormState>({
        icon: icon,
        title: title,
        url: url
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target;
      setText((prev) => ({
          ...prev,
          [name]: value
      }));
  }
    
    const icon_ref = `bi bi-${text.icon}`;

    return (
      <li className="list-row hover:bg-base-200">
        <div>
          <i className={icon_ref} onChange={handleChange}></i>
        </div>
        <p contentEditable onChange={handleChange}>
          {text.title}
        </p>
        <p contentEditable onChange={handleChange}>
          {text.url}
        </p>
        <div>
          <button className="bi bi-trash hover:text-base-content hover:opacity-80 text-xl cursor-pointer"></button>
        </div>
      </li>
    );
}

