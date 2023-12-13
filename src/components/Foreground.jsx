import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref=useRef(null)
  const data = [
    {

desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Drag Me", tagColor: "amber" },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen:0, tagTitle: "Download Now", tagColor: "violet" },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: 1, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5">
      {data.map((item)=>(
      <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
