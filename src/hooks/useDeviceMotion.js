import React from "react";
function oneDecimal(n) {
  var number = n;
  var rounded = Math.round(number * 10) / 10;
  return rounded;
}

function toPercentage(x, n) {
  var p = 0;
  if (n) {
    p = ((x + 10) / 20) * 100;
  } else {
    p = (x + 10) / 20;
  }
  return oneDecimal(p);
}

export const useDeviceMotion = () => {
  const [acceleration, setMotion] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    const handleMotionEvent = (e) => {
      setMotion({
        x: oneDecimal(e.accelerationIncludingGravity.x),
        y: oneDecimal(e.accelerationIncludingGravity.y),
        z: oneDecimal(e.accelerationIncludingGravity.z),
      });
    };

    window.addEventListener("devicemotion", handleMotionEvent, true);
    return () => window.removeEventListener("devicemotion", handleMotionEvent);
  }, []);

  return { acceleration };
};

export default useDeviceMotion;

// const [motion, setMotion] = React.useState({
//   acceleration: {
//     x: null,
//     y: null,
//     z: null,
//   },
//   accelerationIncludingGravity: {
//     x: null,
//     y: null,
//     z: null,
//   },
//   rotationRate: {
//     alpha: null,
//     beta: null,
//     gamma: null,
//   },
//   interval: 0,
// });

// React.useEffect(() => {
//   const handle = (deviceMotionEvent) => {
//     setMotion(deviceMotionEvent);
//   };

//   // if (typeof DeviceOrientationEvent.requestPermission === "function") {
//   //   DeviceOrientationEvent.requestPermission()
//   //     .then((permissionState) => {
//   //       if (permissionState === "granted") {
//   //         window.addEventListener("devicemotion", handle);
//   //       }
//   //     })
//   //     .catch(console.error);
//   // } else {
//   // }

//   try {
//     window.addEventListener("devicemotion", handle, true);
//     console.log("devicemotion");
//   } catch (error) {
//     console.log(error);
//   }

//   return () => {
//     window.removeEventListener("devicemotion", handle);
//   };
// }, []);
