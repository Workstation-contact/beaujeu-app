import { useLottie } from "lottie-react";
import loading from "./loading.json";

const Example = () => {
  const options = {
    animationData: loading,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Example;