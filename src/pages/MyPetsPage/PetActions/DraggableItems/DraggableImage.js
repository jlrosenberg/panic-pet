import React from "react";
import clamp from "lodash-es/clamp";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import useStyles from "./useStyles";


function DraggableImage({ imageUrl, onRelease }) {
  const classes = useStyles(imageUrl)();
  console.log(classes)
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],

      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    });

    if(!down){
      onRelease()
    }
  });
  return (
    <animated.div
      {...bind()}
      className={classes.container}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
        touchAction: 'none'
      }}
    />
  );
}

export default DraggableImage;
