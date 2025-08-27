
"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { FC } from "react";

// Dynamically import lottie-react to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimationLottieProps {
  animationPath: object; // You can replace 'any' with the correct type if known (e.g., object)
  width?: string | number;
}

const AnimationLottie: FC<AnimationLottieProps> = ({ animationPath, width }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
