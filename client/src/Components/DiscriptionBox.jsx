import React from "react";

const DiscriptionBox = () => {
  return (
    <div className="my-10 w-full max-w-6xl">
      <div className="flex">
        <button className="font-semibold border border-b-0 border-zinc-300 py-2 px-4 md:py-4 md:px-6 bg-white">
          Description
        </button>
        <button className="border border-zinc-300 py-2 px-4 md:py-4 md:px-6 bg-zinc-50 text-zinc-500">
          Reviews <span>(122)</span>
        </button>
      </div>
      <div className="border border-zinc-300 p-4 md:p-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          consequatur totam eum eaque tempora deserunt, aspernatur vel doloribus,
          aperiam dolorum nostrum, dolore consequuntur placeat sit doloremque Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit corrupti temporibus culpa dolore ratione officiis corporis eum vel illo quasi exercitationem nostrum magnam, porro autem cum ducimus eaque quae minima.
        </p>
        <br />
        <p>
          earum accusamus cupiditate dolorem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eaque beatae obcaecati ab reprehenderit
          vero impedit libero unde molestias repudiandae.
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;