import { useState, useEffect } from "react";
import "./Message.css";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(!msg) {
        setVisible(false);
        return;
    }
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 1500);

        return () => clearTimeout(timer);

    }, [msg]); 

  return (
    <>
    {visible && (
        <div className={`badge ${type}`}> {msg}</div>
    )}
    </>
  );
}

export default Message;
