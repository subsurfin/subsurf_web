import React from "react";

export function CircularAvatarStack() {
  return (
    <>
      <div className="isolate flex -space-x-2 ">
        <img
          className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="/icon.png"
          alt="userName"
        />
      </div>
    </>
  );
}
