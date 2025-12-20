import { useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { Grid } from "./Grid.jsx";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("works");

  return (
    <>
      <div className="flex justify-center gap-10 border-b-2 border-primary-hover ">
        <button
          className={`cursor-pointer px-6 py-2 border-b-2 text-white transition-all${
            activeTab === "works"
              ? "border-white"
              : "opacity-60 hover:opacity-80"
          }`}
          onClick={() => {
            setActiveTab("works");
          }}
        >
          {activeTab === "works" ? (
            <MdOutlineWork className="size-6 " />
          ) : (
            <MdOutlineWorkOutline className="size-6 " />
          )}
        </button>

        <button
          className={`cursor-pointer px-6 py-2 border-b-2 ${
            activeTab === "info"
              ? "border-white"
              : "opacity-60 hover:opacity-80"
          }`}
          onClick={() => {
            setActiveTab("info");
          }}
        >
          {activeTab === "info" ? (
            <FaUser className="size-6 " />
          ) : (
            <FaRegUser className="size-6 " />
          )}
        </button>
      </div>

      <Grid activeTab={activeTab} />
    </>
  );
};
