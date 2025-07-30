import React from "react";

const DiscriptionBox = () => {
  return (
    <div className="my-10 w-[80vw]">
      <div className="flex">
        <button className="font-semibold border border-zinc-500 p-4">
          Discription
        </button>
        <button className=" border border-zinc-500 p-4">
          Reviews <span>(122)</span>
        </button>
      </div>
      <div className="border p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        consequatur totam eum eaque tempora deserunt, aspernatur vel doloribus,
        aperiam dolorum nostrum, dolore consequuntur placeat sit doloremque Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit corrupti temporibus culpa dolore ratione officiis corporis eum vel illo quasi exercitationem nostrum magnam, porro autem cum ducimus eaque quae minima.
        <hr className="border-0 p-2"/>
        earum accusamus cupiditate dolorem. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eaque beatae obcaecati ab reprehenderit
        vero impedit libero unde molestias repudiandae.
      </div>
    </div>
  );
};

export default DiscriptionBox;
