"use client";
import React from "react";
import useToast from "./custom-hooks/use-toast";

const Home = () => {
  const { toastComponent, triggerToast } = useToast("bottom-left");
  return (
    <div>
      <button
        className="bg-green-300 p-3 m-4 rounded-md hover:rounded-xl cursor-pointer  hover:bg-green-400 transition-all duration-1000"
        onClick={() =>
          triggerToast({
            type: "success",
            message: "This is a success notification",
            duration: 3000,
          })
        }
      >
        Trigger Notification
      </button>
      <button
        className="p-3 bg-red-300 rounded-md hover:rounded-xl hover:bg-red-400 transition-all duration-1000"
        onClick={() =>
          triggerToast({
            type: "error",
            message: "This is a error notification",
            duration: 3000,
          })
        }
      >
        Trigger error
      </button>
      {toastComponent}
    </div>
  );
};

export default Home;
