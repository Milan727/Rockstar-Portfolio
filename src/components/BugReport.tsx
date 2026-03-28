import { motion } from "framer-motion";
import { Bug, AlertTriangle, Terminal, CheckCircle2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BugReport = () => {
  return (
    <section id="bug-report" className="py-24 px-4 bg-background">
      <div className="max-w-6xl flex flex-col items-center mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 text-sm rounded-full glow-primary">
            Featured Case Study
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">QA Analysis</span> Showcase
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A technical dissection of a complex, edge-case collision physics anomaly. Demonstrating professional bug logging, reproduction scoping, and systems analysis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl bg-card border border-border rounded-xl p-6 md:p-8 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle neon grid background inside the card */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Header */}
          <div className="relative z-10 border-b border-border pb-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Bug className="text-primary" size={24} />
                <h3 className="text-2xl font-bold font-mono tracking-tight text-foreground">VCS-409: Collision Mesh De-sync</h3>
              </div>
              <p className="text-accent font-medium">Open-World Logic | Vehicle Entity Dynamics</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="destructive" className="bg-red-500/10 text-red-500 border border-red-500/20">SEVERITY: HIGH (A-Bug)</Badge>
              <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30">STATUS: LOGGED</Badge>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Details */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                  <AlertTriangle className="text-yellow-500" size={18} /> Description
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  When the player vehicle intersects with an NPC vehicle at &gt;80mph during the "Rain" weather state, the NPC entity collision mesh fails to decouple correctly upon impact. This forces the physics engine to treat both entities as a singular rigid body, causing immediate clipping through the terrain geometry (Z-axis floor drop).
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                  <Terminal className="text-accent" size={18} /> Steps to Reproduce
                </h4>
                <ol className="space-y-3">
                  {[
                    "Initialize Game Engine and load a dense urban cell (e.g., Downtown sector).",
                    "Force environment state: Weather = Rain, Surface_Friction = 0.6.",
                    "Spawn Player_Vehicle (Entity 1) and accelerate to &gt;80mph.",
                    "Collide head-on with an incoming NPC_Vehicle (Entity 2) at a 45-degree angle offset.",
                    "Observe Z-axis coordinate logging for both entities post-impact."
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary font-mono select-none">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/40 border border-green-500/20 rounded-lg p-4">
                  <h5 className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                    <CheckCircle2 size={16} /> Expected Result
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Vehicles calculate physical impact vector, deform dynamically, and deflect according to simulated mass and velocity parameters without breaking boundaries.
                  </p>
                </div>
                <div className="bg-black/40 border border-red-500/20 rounded-lg p-4">
                  <h5 className="flex items-center gap-2 text-red-400 font-semibold mb-2">
                    <AlertTriangle size={16} /> Actual Result
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Collision meshes lock together indefinitely. Combined entity drops through the drivable surface geometry into the void below the map.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Environment & Meta */}
            <div className="space-y-6">
              <div className="bg-secondary/20 border border-border rounded-lg p-4">
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Environment Data</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="font-mono text-white">PS5 DevKit / PC</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Build</span>
                    <span className="font-mono text-white">v0.9.8.4-RC</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">FPS</span>
                    <span className="font-mono text-white">60 (Locked)</span>
                  </li>
                  <li className="flex justify-between pb-1">
                    <span className="text-muted-foreground">Trigger Rate</span>
                    <span className="font-mono text-primary font-bold">100%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/20 border border-border rounded-lg p-4">
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">QA Methodology</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Isolated variables using systematic elimination. Confirmed bug is exclusive to rainy weather states due to the modified traction physics calculation loop interfering with the global collision resolver.
                </p>
                <div className="flex items-center text-xs text-primary font-mono hover:text-accent cursor-pointer transition-colors">
                   View Full Logs <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BugReport;
