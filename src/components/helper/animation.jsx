import React from "react";
// import Lottie from "lottie-react";


// const AnimationLottie = ({ animationPath, width = "100%",height="100%" }) => {
//   return (
//     <Lottie
//       animationData={animationPath}
//       loop
//       autoplay
//       style={{
//         width,
//         maxWidth: "100%",
//       }}
//     />
//   );
// };

// export default AnimationLottie;
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width = "100%", height = "100%" }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{
        width,
        height,
        maxWidth: "100%",  // Keep it responsive with maxWidth
      }}
    />
  );
};

export default AnimationLottie;
