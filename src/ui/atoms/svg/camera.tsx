import React from "react";
import type { SVGProps } from "react";

export function CameraE(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.75 12.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"
      ></path>
      <path
        fill="currentColor"
        d="M7.882 2h8.236l1.5 3H23v16H1V5h5.382zM6.75 12.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 0 0-10.5 0"
      ></path>
    </svg>
  );
}