"use client";

import React from "react";
import useToast from "./custom-hooks/use-toast";

export default function Home() {
  const { toastComponent, triggerToast } = useToast("top-right");

  return (
    <>
      <h1 className="text-white text-3xl text-center mx-4 md:mx-10 mt-6">
        Customize your notifications! Choose from different animations and
        durations to suit your needs.
      </h1>
      <div className="grid place-items-center gap-4 p-4 sm:p-6 md:p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <button
          onClick={() =>
            triggerToast({
              type: "error",
              message: "Hello world",
              duration: 3000,
              animationIn: "fade",
              animationOut: "fade",
            })
          }
          className="bg-green-500  hover:bg-green-600 btn animate-fade-in"
        >
          Success Fade Animation
        </button>
        <button
          onClick={() =>
            triggerToast({
              type: "info",
              message: "This is an info notification",
              duration: 3000,
              animationIn: "pop",
              animationOut: "pop",
            })
          }
          className="bg-blue-500  hover:bg-blue-600 btn animate-pop-in"
        >
          Info Pop Animation
        </button>
        <button
          onClick={() =>
            triggerToast({
              type: "warning",
              message: "This is a warning notification",
              duration: 3000,
              animationIn: "slide",
              animationOut: "slide",
            })
          }
          className="bg-yellow-500  hover:bg-yellow-600 btn animate-slide-in"
        >
          Warning Slide Animation
        </button>
        <button
          onClick={() =>
            triggerToast({
              type: "error",
              message: "This is an error notification",
              duration: 3000,
              animationIn: "bounce",
              animationOut: "bounce",
            })
          }
          className="bg-red-500  hover:bg-red-600 btn animate-bounce-in"
        >
          Error Bounce Animation
        </button>

        <button
          onClick={() =>
            triggerToast({
              type: "info",
              message: "Short-duration info notification",
              duration: 1000,
              animationIn: "fade",
              animationOut: "fade",
            })
          }
          className="bg-blue-400  hover:bg-blue-500 btn animate-fade-in"
        >
          Info 1s Duration
        </button>
        <button
          onClick={() =>
            triggerToast({
              type: "warning",
              message: "Long-duration warning notification",
              duration: 5000,
              animationIn: "slide",
              animationOut: "slide",
            })
          }
          className="bg-yellow-400  hover:bg-yellow-500 btn animate-slide-in"
        >
          Warning 5s Duration
        </button>
        <button
          onClick={() =>
            triggerToast({
              type: "success",
              message: "Different animations in and out",
              duration: 3000,
              animationIn: "pop",
              animationOut: "slide",
            })
          }
          className="bg-green-400  hover:bg-green-500 btn animate-pop-in"
        >
          Success Pop-in Slide-out
        </button>
        <button
          onClick={() =>
            triggerToast({
              type: "error",
              message: "Combined animations",
              duration: 3000,
              animationIn: "bounce",
              animationOut: "fade",
            })
          }
          className="bg-red-400  hover:bg-red-500 btn animate-bounce-in"
        >
          Error Bounce-in Fade-out
        </button>
      </div>

      {toastComponent}
    </>
  );
}