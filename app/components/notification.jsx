import React, { useState, useEffect } from "react";

export default function Notification({selectedQuantity, setShowNotification,title}) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress - 1));
    }, 60); 

  }, []);

  useEffect(() => {
    if (progress <= 0) {
      setShowNotification(false);
    }
  }, [progress, setShowNotification]);

  return (
    <div className="animate-notification absolute w-1/4 h-[80px] translate-y-[-30vh] flex items-center justify-center flex-col bg-ACMDARK text-white rounded-lg">
      <div className="w-11/12 text-xl font-semibold">
        <h1 className="cursor-pointer" onClick={() => setShowNotification(false)}>X</h1>
      </div>
      <h1 className="text-lg font-semibold mb-2">{title} x{selectedQuantity} add to the cart</h1>
      <div className="w-[95%] h-10 bg-black mb-2 ">
        <div
          className={`h-full bg-white `}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
