import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PillNav from "./components/PillNav";
import avatar from "./assets/avatar.png";
import Index from "./pages/Index";
import LogsPage from "./pages/LogsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PillNav 
          logo={avatar}
          logoAlt="Milan Tiwari"
          items={[
            { label: 'Home', href: '#' },
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Case Study', href: '#bug-report' },
            { label: 'Contact', href: '#contact' }
          ]}
          activeHref="#"
          ease="power2.easeOut"
          baseColor="#ffaa00"
          pillColor="#000000"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#ffffff"
          className="z-50"
        />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/logs" element={<LogsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
