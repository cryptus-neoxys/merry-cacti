import { useEffect, useState } from "react";
import { ChatBotWrapper } from "./ChatBotWrapper";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SendIcon from "@material-ui/icons/Send";

const ChatBot = () => {
  const [collapse, setCollapse] = useState(true);
  const [Chat, setChat] = useState([]);
  const [val, setVal] = useState("");

  const replies = [
    "As I see it, yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "It is certain.",
    "It is decidedly so.",
    "Most likely.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Outlook good.",
    "Reply hazy, try again.",
    "Signs point to yes.",
    "Very doubtful.",
    "Without a doubt.",
    "Yes.",
    "Yes – definitely.",
    "You may rely on it.",
  ];

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
        message: replies[Math.floor(Math.random() * replies.length)],
      },
    ]);
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
      setCollapse(true);
      setChat([
        ...Chat,
        {
          user: "me",
          message: "Hi there.",
        },
      ]);
    }
    let chatScroll = document.getElementById("messages");
    if (chatScroll)
      chatScroll.scroll({ top: chatScroll.scrollHeight, behavior: "smooth" });
  }, [Chat]);

  return (
    <ChatBotWrapper>
      <div className="chatbot">
        {collapse ? (
          <></>
        ) : (
          <div className="chat-container">
            <div className="chat-head">Merry Cacti</div>
            <section className="chat-messages" id="messages">
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
                  if (val !== "") {
                    addMessage();
                  }
                }}
              >
                <SendIcon style={{ fontSize: "13px" }} />
              </button>
            </section>
          </div>
        )}
        <button
          className="switch"
          onClick={() => {
            setCollapse(!collapse);
          }}
          style={{ cursor: "pointer" }}
        >
          <QuestionAnswerIcon style={{ color: "white" }} />
        </button>
      </div>
    </ChatBotWrapper>
  );
};

export default ChatBot;
