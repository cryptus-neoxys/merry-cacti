import { useEffect, useState } from "react";
import { ChatBotWrapper } from "./ChatBotWrapper";

const ChatBot = () => {
  const [collapse, setCollapse] = useState(true);
  const [Chat, setChat] = useState([]);
  const [val, setVal] = useState("");

  const replies = ["Hi", "How are you", "Test Message 1", "Test Message 2"];
  const [repCounter, setCounter] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addMessage();
    }
  };

  const addReply = () => {
    setChat([
      ...Chat,
      {
        user: "me",
        message: replies[repCounter],
      },
    ]);
    setCounter(repCounter + 1);
  };

  const addMessage = () => {
    setChat([
      ...Chat,
      {
        user: "user",
        message: val,
      },
    ]);
    setVal("");
  };

  useEffect(() => {
    if (Chat.length > 0) {
      if (Chat[Chat.length - 1].user === "user") {
        setTimeout(() => {
          addReply();
        }, 500);
      }
    } else {
      setCollapse(false);
      addReply();
    }
  }, [Chat]);

  return (
    <ChatBotWrapper>
      <div className="chatbot">
        {collapse ? (
          <></>
        ) : (
          <div className="chat-container">
            <div className="chat-head">Merry Cacti</div>
            <section className="chat-messages">
              {Chat.map((mes) => (
                <div className={mes.user === "user" ? "self" : "remote"}>
                  <div>{mes.message}</div>
                </div>
              ))}
            </section>
            <section className="chat-input">
              <input
                placeholder="Message goes here"
                value={val}
                onChange={(e) => {
                  setVal(e.target.value);
                }}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={() => {
                  addMessage;
                }}
              >
                Send
              </button>
            </section>
          </div>
        )}
        <button
          className="switch"
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          Chat
        </button>
      </div>
    </ChatBotWrapper>
  );
};

export default ChatBot;
