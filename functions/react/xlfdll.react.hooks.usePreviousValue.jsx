import { useEffect, useRef } from "react";

function usePreviousValue(value) {
  const ref = useRef();

  // useEffect() will not be invoked until calling component has been rendered
  useEffect(() => {
    ref.current = value;
  });

  // Hence, this return statement will be always executed first
  return ref.current;
}
