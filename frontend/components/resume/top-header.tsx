"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AudioLines,
  ChevronLeft,
  Github,
  MapPin,
  MessageSquare,
  Mic,
  SendHorizontal,
  Sparkles,
  Volume2,
  X
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { PortfolioData } from "@/data/portfolio";

type TopHeaderProps = {
  data: PortfolioData;
};

type LaunchOrigin = {
  x: number;
  y: number;
  width: number;
  height: number;
  viewportWidth: number;
  viewportHeight: number;
};

export function TopHeader({ data }: TopHeaderProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMode, setChatMode] = useState<"text" | "voice">("text");
  const [launchOrigin, setLaunchOrigin] = useState<LaunchOrigin | null>(null);
  const chatbotButtonRef = useRef<HTMLButtonElement>(null);

  const openChatbot = () => {
    const button = chatbotButtonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      setLaunchOrigin({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight
      });
    }
    setChatMode("text");
    setIsChatOpen(true);
  };

  const closeChatbot = () => setIsChatOpen(false);

  const launchX = launchOrigin
    ? launchOrigin.x + launchOrigin.width / 2 - launchOrigin.viewportWidth / 2
    : 0;
  const launchY = launchOrigin
    ? launchOrigin.y + launchOrigin.height / 2 - launchOrigin.viewportHeight / 2
    : 0;

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
                src="/profile-photo.svg"
                alt="Profile placeholder for Loyd"
                width={82}
                height={82}
                className="h-20 w-20 rounded-xl border border-[#161f320f] object-cover"
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
                    AI Software Engineer
                  </span>
                  <span className="rounded-md border border-[#222c4430] bg-[#e9ecf5] px-2 py-1 text-[11px] font-bold text-[#1a2336]">
                    Product-minded Builder
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

            <div className="shrink-0 text-center">
              <button
                type="button"
                aria-label="Open AI chatbot"
                ref={chatbotButtonRef}
                onClick={openChatbot}
                className="appearance-none border-0 bg-transparent p-0 shadow-none outline-none transition hover:scale-[1.02]"
              >
                <Image
                  src="/image/chatbotimage-removebg-preview.png"
                  alt="Chatbot button image"
                  width={122}
                  height={122}
                  className="block h-24 w-24 bg-transparent object-contain sm:h-28 sm:w-28"
                />
              </button>
              <p className="mt-1 text-[11px] font-semibold text-[#4b41d5]">Ask Me Anything</p>
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
            onClick={closeChatbot}
          >
            {launchOrigin ? (
              <motion.span
                aria-hidden
                initial={{ opacity: 0.6, scale: 0.35 }}
                animate={{ opacity: 0, scale: 13 }}
                transition={{ duration: 0.55, ease: [0.2, 0.9, 0.2, 1] }}
                className="pointer-events-none fixed z-[71] h-5 w-5 rounded-full bg-[#8f82ff]"
                style={{
                  left: launchOrigin.x + launchOrigin.width / 2,
                  top: launchOrigin.y + launchOrigin.height / 2
                }}
              />
            ) : null}

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="AI chatbot preview"
              initial={{
                opacity: 0,
                x: launchX,
                y: launchY,
                scale: 0.2,
                rotate: -10,
                borderRadius: "999px",
                filter: "blur(2px)"
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                borderRadius: "16px",
                filter: "blur(0px)"
              }}
              exit={{
                opacity: 0,
                x: launchX,
                y: launchY,
                scale: 0.18,
                rotate: 10,
                borderRadius: "999px",
                filter: "blur(1px)"
              }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 28,
                mass: 0.72
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative z-[72] w-[min(94vw,26rem)] overflow-hidden rounded-[2rem] border border-[#ffffff8c] bg-[#e8eef7] text-[#1a2840] shadow-[0_30px_80px_rgba(86,140,209,0.38)]"
            >
              <div className="relative h-[min(82vh,44rem)] bg-[radial-gradient(circle_at_10%_0%,rgba(129,183,255,0.33),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(140,162,255,0.35),transparent_38%),linear-gradient(180deg,#eef3fa,#e8eef7)]">
                <div className="px-4 pt-4">
                  <div className="mb-3 flex items-center justify-between text-[13px] font-semibold text-[#20314c]">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#20314c]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#20314c]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#20314c]" />
                    </div>
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <button
                      type="button"
                      aria-label="Close chatbot"
                      onClick={closeChatbot}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4dce9] bg-[#f3f6fb] text-[#3a4a66] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <div className="flex items-center rounded-full border border-[#d3dce9] bg-[#f0f4fa] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                      <button
                        type="button"
                        onClick={() => setChatMode("text")}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                          chatMode === "text"
                            ? "bg-white text-[#1c2c46] shadow-sm"
                            : "text-[#5a6883]"
                        }`}
                      >
                        <MessageSquare size={13} />
                        Text Chat
                      </button>
                      <button
                        type="button"
                        onClick={() => setChatMode("voice")}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                          chatMode === "voice"
                            ? "bg-white text-[#1c2c46] shadow-sm"
                            : "text-[#5a6883]"
                        }`}
                      >
                        <AudioLines size={13} />
                        Voice Chat
                      </button>
                    </div>

                    <button
                      type="button"
                      aria-label="Close chatbot"
                      onClick={closeChatbot}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4dce9] bg-[#f3f6fb] text-[#3a4a66] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {chatMode === "text" ? (
                  <div className="flex h-[calc(100%-7.25rem)] flex-col px-4 pb-4">
                    <div className="space-y-3 overflow-y-auto pb-4">
                      <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-white px-3 py-2.5 text-[15px] leading-relaxed text-[#23324d] shadow-[0_8px_20px_rgba(96,130,177,0.15)]">
                        Can you tell me about your strongest AI projects?
                      </div>

                      <div className="max-w-[86%]">
                        <div className="mb-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[radial-gradient(circle_at_25%_20%,#a7d8ff,#5e9eff_60%,#4d6ef4)] text-white shadow-[0_6px_14px_rgba(76,119,222,0.35)]">
                          <Sparkles size={12} />
                        </div>
                        <p className="text-[15px] leading-relaxed text-[#1f2e46]">
                          Sure. My top build is an AI CRM Assistant with clean FastAPI architecture,
                          React + TypeScript UI, and PostgreSQL + SQLAlchemy data modeling.
                        </p>
                        <button
                          type="button"
                          className="mt-2 inline-flex items-center gap-2 rounded-xl border border-[#a7bdd9] bg-[#f4f8ff] px-3 py-2 text-sm font-medium text-[#2d4468]"
                        >
                          View Project Snapshot
                        </button>
                        <p className="mt-2 text-sm leading-relaxed text-[#24344f]">
                          I can also walk through stack decisions, architecture boundaries, and
                          deployment readiness.
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto rounded-2xl border border-[#6ea2d3] bg-[#eaf3ff] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                      <div className="flex items-center gap-2 rounded-xl bg-[#eaf3ff] px-2">
                        <input
                          aria-label="Chatbot message input preview"
                          placeholder="Ask Loyd AI..."
                          className="w-full bg-transparent py-2 text-sm text-[#2a3a57] placeholder:text-[#6f84a3] focus:outline-none"
                          readOnly
                        />
                        <button
                          type="button"
                          aria-label="Voice input preview"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d4ecff] text-[#3779b9]"
                        >
                          <Mic size={14} />
                        </button>
                        <button
                          type="button"
                          aria-label="Send message preview"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#5d8af7] text-white"
                        >
                          <SendHorizontal size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-[calc(100%-7.25rem)] flex-col px-4 pb-4">
                    <div className="flex flex-1 flex-col items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.8, 0.45] }}
                        transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute h-44 w-44 rounded-full bg-[radial-gradient(circle,#b2dcff,transparent_70%)]"
                      />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="relative mb-6 flex h-40 w-40 items-center justify-center rounded-full border border-[#9fd0f3] bg-[radial-gradient(circle_at_30%_20%,#e8f8ff,#9dd2ff_38%,#5d96f3_72%,#7a8eff)] shadow-[0_20px_40px_rgba(102,149,226,0.35)]"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                          className="h-28 w-28 rounded-full bg-[radial-gradient(circle_at_25%_15%,#ffffff,#c2e9ff_35%,#7aa6ff_75%)]"
                        />
                      </motion.div>
                      <p className="text-3xl font-semibold tracking-tight text-[#213553]">
                        AI is listening...
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between px-1">
                      <button
                        type="button"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c7d5e9] bg-[#f3f7fc] text-[#526786]"
                      >
                        <Volume2 size={18} />
                      </button>
                      <button
                        type="button"
                        className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#5b89eb] shadow-[0_0_0_10px_rgba(150,199,255,0.25),0_8px_24px_rgba(113,159,230,0.45)]"
                      >
                        <Mic size={24} />
                      </button>
                      <button
                        type="button"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c7d5e9] bg-[#f3f7fc] text-[#526786]"
                      >
                        <MessageSquare size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
