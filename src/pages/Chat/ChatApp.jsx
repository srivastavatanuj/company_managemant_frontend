import { useRef, useEffect, useState } from "react";

const ChatApp = () => {
  const ref = useRef();
  const [messages, setMessages] = useState([]);
  let socket = new WebSocket("ws://localhost:8000/ws/chat/123/");

  useEffect(() => {
    socket = new WebSocket("ws://localhost:8000/ws/chat/123/");

    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log("Message received: ", data);
      setMessages((prevMessages) => [...prevMessages, data]); // Append new message
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    console.log(socket);
    const data = { message: ref.current.value, username: "123" };
    socket.send(JSON.stringify(data));
    ref.current.value = ""; // Clear the input field after sending
  };

  return (
    <div
      className="h-screen w-full flex p-5 gap-3"
      style={{ height: "calc(100vh - 150px)" }}
    >
      <div className="w-[450px] bg-[#172554] flex flex-col border">
        <div className="w-full"></div>
        <input
          type="text"
          className="rounded-full p-2 bg-white mx-auto w-[90%] my-5 indent-4"
          placeholder="Search User"
        />

        <span className="border-b-2"></span>
        <div></div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <div className="bg-blue-100 h-full">hello</div>
        <div className="bg-red-100 h-[60px]">chat</div>
      </div>
    </div>
    // <div className="h-[600px] my-10 w-[500px] border mx-auto relative">
    //   <div className="messages">
    //     {messages.map((msg, index) => (
    //       <div key={index}>
    //         <strong>{msg.username}:</strong> {msg.message}
    //       </div>
    //     ))}
    //   </div>
    //   <div className="absolute bottom-10 flex justify-between px-4 w-full gap-3">
    //     <input
    //       ref={ref}
    //       type="text"
    //       placeholder="Send Message"
    //       className="rounded-full border-2 px-6 py-4 w-4/5"
    //     />
    //     <button
    //       className="bg-blue-300 w-1/5 rounded font-black"
    //       onClick={sendMessage}
    //     >
    //       Send
    //     </button>
    //   </div>
    // </div>
  );
};

export default ChatApp;
