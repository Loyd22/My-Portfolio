"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, MapPin, SendHorizontal, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { PortfolioData } from "@/data/portfolio";

type TopHeaderProps = {
  data: PortfolioData;
};

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

export function TopHeader({ data }: TopHeaderProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [draftMessage, setDraftMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Hi! Start the chat by sending a message." }
  ]);

  const openChatbot = () => {
    setDraftMessage("");
    setMessages([{ role: "assistant", text: "Hi! Start the chat by sending a message." }]);
    setIsChatOpen(true);
  };

  const handleSendMessage = () => {
    const trimmed = draftMessage.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "assistant", text: "Chatbot is not available right now." }
    ]);
    setDraftMessage("");
  };

  return (
    <>
      <section className="grid gap-4 pb-5 lg:grid-cols-12">
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-[#2027391c] bg-[#f8f9fc] p-4 lg:col-span-12"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div className="flex items-start gap-4">
              <Image
                src="/profile-photo.jpg"
                alt="Profile placeholder for Loyd"
                width={120}
                height={120}
                className="h-32 w-32 rounded-xl border border-[#161f320f] object-cover"
                priority
              />
              <div className="min-w-0 flex-1">
                <h1 className="text-xl font-extrabold tracking-tight text-[#121826] sm:text-2xl">
                  {data.identity.fullName}
                </h1>
                <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#3d4a66]">
                  <MapPin size={13} /> {data.identity.location}
                </p>
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#3d4a66] sm:text-sm">
                  {data.identity.headline}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-md border border-[#222c4430] bg-[#e9ecf5] px-2 py-1 text-[11px] font-bold text-[#1a2336]">
                    Python Developer
                  </span>
                  <span className="rounded-md border border-[#222c4430] bg-[#e9ecf5] px-2 py-1 text-[11px] font-bold text-[#1a2336]">
                    AI/ML Builder
                  </span>
                  <a
                    href={data.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-[#6155ea44] bg-[#6155ea12] px-2 py-1 text-[11px] font-bold text-[#4b41d5]"
                  >
                    <Github size={12} />
                    github.com/Loyd22
                  </a>
                </div>
              </div>
            </div>

            <div className="shrink-0 text-center sm:mr-6">
              <button
                type="button"
                aria-label="Open AI chatbot"
                onClick={openChatbot}
                className="appearance-none border-0 bg-transparent p-0 shadow-none outline-none transition hover:scale-[1.02]"
              >
                <Image
                  src="/image/chatbotimage-removebg-preview.png"
                  alt="Chatbot button image"
                  width={80}
                  height={80}
                  className="block h-15 w-15 bg-transparent object-contain sm:h-20 sm:w-20"
                />
              </button>
            </div>
          </div>
        </motion.article>
      </section>

      <AnimatePresence>
        {isChatOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#050814]/60 p-4 backdrop-blur-[2px]"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="AI chatbot preview"
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative z-[72] w-[min(94vw,26rem)] overflow-hidden rounded-2xl border border-[#dce2ee] bg-[#f7f9fc] text-[#1a2840] shadow-[0_20px_60px_rgba(39,64,109,0.22)]"
            >
              <div className="flex h-[min(82vh,44rem)] flex-col p-4">
                <div className="mb-3 flex items-center justify-end">
                  <button
                    type="button"
                    aria-label="Close chatbot"
                    onClick={() => setIsChatOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d4dce9] bg-white text-[#3a4a66]"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="flex-1 space-y-3 overflow-y-auto pb-4">
                  {messages.map((message, index) =>
                    message.role === "user" ? (
                      <div
                        key={`${message.role}-${index}`}
                        className="ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-white px-3 py-2.5 text-[15px] leading-relaxed text-[#23324d]"
                      >
                        {message.text}
                      </div>
                    ) : (
                      <p
                        key={`${message.role}-${index}`}
                        className="max-w-[86%] text-[15px] leading-relaxed text-[#1f2e46]"
                      >
                        {message.text}
                      </p>
                    )
                  )}
                </div>

                <div className="rounded-xl border border-[#ccd7e8] bg-white p-2">
                  <form
                    className="flex items-center gap-2"
                    onSubmit={(event) => {
                      event.preventDefault();
                      handleSendMessage();
                    }}
                  >
                    <input
                      aria-label="Chatbot message input preview"
                      placeholder="Type a message..."
                      value={draftMessage}
                      onChange={(event) => setDraftMessage(event.target.value)}
                      className="w-full bg-transparent py-2 text-sm text-[#2a3a57] placeholder:text-[#6f84a3] focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Send message preview"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#c9d4e6] bg-white text-[#4d5d79]"
                    >
                      <SendHorizontal size={14} />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
