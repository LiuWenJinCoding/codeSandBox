import React, { useState, useEffect } from "react";

let timer = null;

export default () => {
  let [str, setStr] = useState(0);
  useEffect(() => {
    // 这种方式会在每次渲染后执行
    timer = setInterval(() => {
      setStr(++str);
    }, 3000);
    // 返回的函数会在组件即将销毁时执行
    return () => {
      clearInterval(timer);
      timer = null;
      console.log("over");
    };
  }, [str]);
  return <div>{str}</div>;
};
