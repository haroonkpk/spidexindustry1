"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Send } from "lucide-react";

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([
    {
      id: 1,
      sender: "admin",
      type: "text",
      text: "Hi! How can we help you today?",
      time: "10:00 AM",
    },
  ]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const sendMessage = () => {
    if (!input.trim() && !image) return;
    const newMsg = {
      id: Date.now(),
      sender: "client",
      type: image ? "image" : "text",
      text: input,
      image: image ? URL.createObjectURL(image) : null,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setImage(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="space-y-[clamp(1.5rem,3vw,2rem)]">
      {/* HEADER */}
      <PageHeader
        variant="dark"
        label="Messages"
        title="Client Chat Center"
        description="Talk directly with the production team — send text &amp; images."
      />

      {/* CHAT BOX */}
      <Card className="border border-slate-100 bg-white overflow-hidden flex flex-col" style={{ height: "clamp(500px, 65vh, 700px)" }}>
        {/* Chat header bar */}
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-[clamp(1rem,2vw,1.5rem)] py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-sm font-semibold text-slate-700">Production Team</p>
          <span className="ml-auto text-xs text-slate-400">Online</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 p-[clamp(1rem,2vw,1.5rem)]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[72%] rounded-2xl px-4 py-2.5 text-sm shadow-xs ${
                msg.sender === "client"
                  ? "bg-sky-600 text-white rounded-br-none"
                  : "bg-slate-100 text-slate-900 rounded-bl-none"
              }`}>
                {msg.type === "text" && <p>{msg.text}</p>}
                {msg.type === "image" && msg.image && (
                  <img
                    src={msg.image}
                    alt="attachment"
                    className="rounded-xl max-h-60 w-full object-cover"
                  />
                )}
                <p className={`mt-1 text-[10px] ${msg.sender === "client" ? "text-sky-200" : "text-slate-400"} text-right`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected image preview */}
        {image && (
          <div className="mx-[clamp(1rem,2vw,1.5rem)] mb-2 flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-xs text-sky-700">
            📎 {image.name}
            <button onClick={() => setImage(null)} className="ml-auto text-sky-400 hover:text-sky-600">✕</button>
          </div>
        )}

        {/* Input area */}
        <div className="border-t border-slate-100 px-[clamp(1rem,2vw,1.5rem)] py-3 flex items-center gap-2">
          {/* Attachment */}
          <label className="cursor-pointer rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 transition shrink-0">
            📎
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => { if (e.target.files?.[0]) setImage(e.target.files[0]); }}
            />
          </label>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-sky-500 transition"
          />

          <button
            onClick={sendMessage}
            className="flex items-center gap-1.5 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition shrink-0"
          >
            <Send className="h-3.5 w-3.5" />
            Send
          </button>
        </div>
      </Card>
    </div>
  );
}