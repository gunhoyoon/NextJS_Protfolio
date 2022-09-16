import React from "react";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "./../../../public/animation.json";
// 찾을 수 없다는데 이거 왜 됨 ?

export default function Animation() {
  return <Lottie loop animationData={lottieJson} play />;
}
