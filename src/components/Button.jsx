import React from "react";
import { ExternalLink } from "lucide-react";

function Button() {
  return (
    <div>
      <button
        type="button"
        className="inline-flex w-full items-center justify-center rounded-md bg-[#4337C9] px-3.5 py-2.5  text-white">
        <a href="#">join telegram</a>
        <ExternalLink className="ml-2" size={16} />
      </button>
    </div>
  );
}

export default Button;
