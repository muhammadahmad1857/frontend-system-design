# Toast Library

A customizable toast notification library built with Next.js and TypeScript. Easily integrate toast notifications into your Next.js projects with customizable animations, durations, positions, and types.
![Frontend_System_Design_Questions__Toast_Component___HLD_LLD](https://github.com/muhammadahmad1857/frontend-system-design/blob/main/toast-app/toast-component/public/preview.mkv)

## Features

- **Customizable Animations**: Choose from `fade`, `pop`, `slide`, or `bounce` animations for both entrance and exit.
- **Multiple Positions**: Display notifications in various positions on the screen.
- **Flexible Duration**: Set the duration for how long the toast notification should be visible.
- **Icon and Color Variants**: Different icons and colors for various types of notifications.
- **Open Source**: Contribute or view the source code on [GitHub](https://github.com/muhammadahmad1857/frontend-system-design/tree/main/toast-component).

<!-- ## Installation

You can install the library via npm:

```bash
npm install
``` -->

## Usage

### Setup

First, import and use the `useToast` hook in your component:

```tsx
import React from "react";
import useToast from "your-toast-library";

export default function Home() {
  const { toastComponent, triggerToast } = useToast("bottom-left");

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
              type: "success",
              message: "This is a success notification",
              duration: 3000,
              animationIn: "fade",
              animationOut: "fade",
            })
          }
          className="bg-green-500 hover:bg-green-600 btn animate-fade-in"
        >
          Success Fade Animation
        </button>
        {/* More buttons for different types and animations */}
      </div>

      {toastComponent}
    </>
  );
}
```

### `useToast` Hook

- **`toastComponent`**: Render this in your component to display the toast notifications.
- **`triggerToast`**: Function to trigger a toast notification.

#### Parameters for `triggerToast`

- `type` (optional): The type of notification (`"info"`, `"success"`, `"warning"`, `"error"`). Default is `"info"`.
- `message`: The message to be displayed in the toast.
- `duration` (optional): Duration for which the toast will be visible in milliseconds. Default is `3000`.
- `animationIn` (optional): Animation for the toast entrance (`"fade"`, `"pop"`, `"slide"`, `"bounce"`). Default is `"fade"`.
- `animationOut` (optional): Animation for the toast exit (`"fade"`, `"pop"`, `"slide"`, `"bounce"`). Default is `"fade"`.

### Notification Types

- **`info`**: Provides general information.
  - Icon: `AiOutlineInfoCircle`
  - Color: `#2196f3`
- **`success`**: Indicates a successful action.
  - Icon: `AiOutlineCheckCircle`
  - Color: `#4caf50`
- **`warning`**: Alerts about potential issues.
  - Icon: `AiOutlineWarning`
  - Color: `#ff9800`
- **`error`**: Indicates an error or failure.
  - Icon: `AiOutlineCloseCircle`
  - Color: `#f44336`

### Positions

You can specify the position of the toast notification on the screen by passing one of the following values to the `useToast` hook:

- **`top-left`**
- **`top-right`**
- **`bottom-left`** (default)
- **`bottom-right`**

### Example

```tsx
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
  className="bg-blue-500 hover:bg-blue-600 btn animate-pop-in"
>
  Info Pop Animation
</button>
```

## Default Values

- **Position**: `"bottom-left"`
- **Animation In**: `"fade"`
- **Animation Out**: `"fade"`
- **Duration**: `3000 ms`

## Contributing

Feel free to open an issue or submit a pull request on [GitHub](https://github.com/muhammadahmad1857/frontend-system-design/tree/main/toast-component) if you have suggestions or improvements.
