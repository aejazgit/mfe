import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div>
      {/* <h1>Hi there</h1> */}
      <div ref={ref}></div>
    </div>
  );
};
