import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
    case "sys":  return "text-[#ffaa00]";
    default:     return "text-white/70";
  }
};

const LogsPage = () => {
  const [lines, setLines] = useState<typeof LOG_LINES>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < LOG_LINES.length) {
        setLines((prev) => [...prev, LOG_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Terminal className="text-[#ffaa00]" size={20} />
          <span className="text-base font-mono text-[#ffaa00] font-bold tracking-wider">
            R* QA DEBUG CONSOLE
          </span>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-mono text-white/50 hover:text-[#ffaa00] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>

      {/* Bug Info Bar */}
      <div className="px-6 py-3 bg-[#0a0a0a] border-b border-white/5 flex flex-wrap items-center gap-4 text-xs font-mono">
        <span className="text-white/40">TICKET:</span>
        <span className="text-white font-bold">VCS-409</span>
        <span className="text-white/20">|</span>
        <span className="text-white/40">TITLE:</span>
        <span className="text-white">Collision Mesh De-sync</span>
        <span className="text-white/20">|</span>
        <span className="text-white/40">SEVERITY:</span>
        <span className="text-red-400 font-bold">HIGH (A-Bug)</span>
        <span className="text-white/20">|</span>
        <span className="text-white/40">ANALYST:</span>
        <span className="text-[#ffaa00]">M.Tiwari</span>
      </div>

      {/* Terminal body */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 font-mono text-[14px] leading-relaxed"
      >
        {lines.map((line, idx) => (
          <div
            key={idx}
            className={`${getColor(line.type)} whitespace-pre`}
          >
            {line.text}
          </div>
        ))}
        {lines.length < LOG_LINES.length && (
          <span className="inline-block w-2.5 h-5 bg-[#ffaa00] animate-pulse ml-0.5 mt-1" />
        )}
        {lines.length === LOG_LINES.length && (
          <div className="mt-8 pt-4 border-t border-white/10">
            <p className="text-white/30 text-xs font-mono">
              End of log — {LOG_LINES.length} entries rendered. Session complete.
            </p>
          </div>
        )}
      </motion.div>

      {/* Traffic lights footer */}
      <div className="px-6 py-3 border-t border-white/10 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-white/20 text-xs font-mono">
          {lines.length}/{LOG_LINES.length} lines
        </span>
      </div>
    </div>
  );
};

export default LogsPage;
