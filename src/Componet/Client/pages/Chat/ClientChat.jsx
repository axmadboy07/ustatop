import React, { useState } from "react";
import "./ClientChat.css";
import Client from "../Client";

const ClientChat = () => {

  const chats = [
    {
      id: 1,
      name: "Akmal Elektrik",
      last: "Assalomu alaykum.",
      online: true,
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      name: "Sardor Santexnik",
      last: "Qachon boray?",
      online: false,
      image: "https://i.pravatar.cc/150?img=15"
    },
    {
      id: 3,
      name: "Javohir Quruvchi",
      last: "Narx kelishiladi.",
      online: true,
      image: "https://i.pravatar.cc/150?img=18"
    }
  ];

  const [message, setMessage] = useState("");

  return (
    <main className="chat-page">

      {/* Sidebar */}

      <aside className="chat-sidebar">

        <h2>Xabarlar</h2>

        <input
          type="text"
          placeholder="Usta qidirish..."
        />

        {chats.map((user) => (
          <div className="chat-user" key={user.id}>

            <img src={user.image} alt="" />

            <div>

              <h3>
                {user.name}

                {user.online && (
                  <span className="online"></span>
                )}

              </h3>

              <p>{user.last}</p>

            </div>

          </div>
        ))}

      </aside>

      {/* Chat */}

      <section className="chat-content">

        <div className="chat-header">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
          />

          <div>

            <h2>Akmal Elektrik</h2>

            <span>Online</span>

          </div>

        </div>

        <div className="messages">

          <div className="message left">
            Assalomu alaykum.
          </div>

          <div className="message right">
            Assalomu alaykum, elektr rozetka ishlamayapti.
          </div>

          <div className="message left">
            Manzilni yuboring.
          </div>

        </div>

        <div className="send-box">

          <button>😊</button>

          <button>📎</button>

          <input
            type="text"
            placeholder="Xabar yozing..."
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />

          <button>📤</button>

        </div>

      </section>

    </main>
  );
};

export default ClientChat;