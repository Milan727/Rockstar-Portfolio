import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal } from "lucide-react";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LOG_LINES = [
  { type: "sys", text: "R* QA Debug Console v4.2.1 — Build v0.9.8.4-RC" },
  { type: "sys", text: "Session: VCS-409 | Analyst: M.Tiwari | Priority: A-Bug" },
  { type: "sep", text: "─────────────────────────────────────────────────" },
  { type: "info", text: "[SYS]  Initializing Collision Resolver v4.0.2..." },
  { type: "info", text: "[SYS]  Loading urban cell: Downtown_Sector_07" },
  { type: "info", text: "[SYS]  Weather state forced → Rain | Surface_Friction: 0.60" },
  { type: "data", text: "[DATA] Spawning Player_Vehicle (Entity_01) at X:412.8 Y:1087.3 Z:14.0" },
  { type: "data", text: "[DATA] Spawning NPC_Vehicle (Entity_02) at X:489.1 Y:1090.1 Z:14.0" },
  { type: "info", text: "[SYS]  Physics tick rate: 60Hz | Locked framerate confirmed" },
  { type: "sep", text: "─────────────────────────────────────────────────" },
  { type: "data", text: "[DATA] Entity_01 velocity: 84.2 mph | Heading: 045°" },
  { type: "data", text: "[DATA] Entity_02 velocity: 42.7 mph | Heading: 225°" },
  { type: "data", text: "[DATA] Impact angle offset: 44.8° | Distance closing..." },
  { type: "warn", text: "[WARN] Collision detected — Impact force: 12,847 N" },
  { type: "warn", text: "[WARN] Mesh overlap threshold exceeded on Entity_02" },
  { type: "err",  text: "[ERR]  CollisionResolver::Decouple() FAILED — entities locked" },
  { type: "err",  text: "[ERR]  RigidBody merge detected: Entity_01 + Entity_02" },
  { type: "data", text: "[DATA] Combined mass: 3,420 kg | Merged velocity: 61.3 mph" },
  { type: "sep", text: "─────────────────────────────────────────────────" },
  { type: "warn", text: "[WARN] Z-axis anomaly: Entity_01.Z dropping — 14.0 → 11.2 → 6.8" },
  { type: "err",  text: "[ERR]  Terrain boundary breach: Z < Surface_Floor (0.0)" },
  { type: "err",  text: "[ERR]  Entity_01.Z = -42.7 — BELOW MAP GEOMETRY" },
  { type: "err",  text: "[ERR]  Entity_02.Z = -42.7 — BELOW MAP GEOMETRY" },
  { type: "err",  text: "[ERR]  RainPhysicsLoop::FrictionCalc() — memory leak at 0x7FF2A1" },
  { type: "sep", text: "─────────────────────────────────────────────────" },
  { type: "info", text: "[SYS]  Root cause: Rain traction modifier conflicts with" },
  { type: "info", text: "       global CollisionResolver post-impact decoupling." },
  { type: "info", text: "[SYS]  Friction override prevents mesh separation callback." },
  { type: "sep", text: "─────────────────────────────────────────────────" },
  { type: "warn", text: "[QA]   Reproduction rate: 100% under Rain weather state" },
  { type: "warn", text: "[QA]   Reproduction rate: 0% under Clear/Cloudy/Fog states" },
  { type: "info", text: "[QA]   Verdict: Rain-exclusive physics desync — A-Bug confirmed" },
  { type: "sys",  text: "" },
  { type: "sys",  text: ">>> Bug VCS-409 logged to Jira — awaiting engine team review." },
  { type: "sys",  text: ">>> Session closed." },
];

const getColor = (type: string) => {
  switch (type) {
    case "err":  return "text-red-400";
    case "warn": return "text-yellow-400";
    case "data": return "text-blue-300";
    case "info": return "text-green-400";
    case "sep":  return "text-white/20";
    case "sys":  return "text-primary";
    default:     return "text-white/70";
  }
};

const TerminalModal = ({ isOpen, onClose }: TerminalModalProps) => {
  const [lines, setLines] = useState<typeof LOG_LINES>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isOpen) {
      setLines([]);
      let i = 0;
      intervalRef.current = setInterval(() => {
        if (i < LOG_LINES.length) {
          setLines((prev) => [...prev, LOG_LINES[i]]);
          i++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      }, 90);
    } else {
      setLines([]);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-3xl bg-[#0a0a0a] border border-primary/30 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="text-primary" size={16} />
                <span className="text-sm font-mono text-primary font-bold tracking-wider">
                  R* QA DEBUG CONSOLE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <button
                  onClick={onClose}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Terminal body */}
            <div
              ref={scrollRef}
              className="h-[400px] overflow-y-auto p-4 font-mono text-[13px] leading-relaxed scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
            >
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`${getColor(line.type)} whitespace-pre`}
                >
                  {line.text}
                </motion.div>
              ))}
              {lines.length < LOG_LINES.length && (
                <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5" />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalModal;
