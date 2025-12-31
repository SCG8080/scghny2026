import { useState } from 'react';
import { TerminalHero } from './components/TerminalHero';
import { TeamCard } from './components/TeamCard';
import { teams } from './data/teams';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen pb-20">
      <AnimatePresence>
        {!showContent ? (
          <motion.div
            key="terminal"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117]"
          >
            <TerminalHero onComplete={() => setShowContent(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4 py-8"
          >
            <header className="text-center mb-16 mt-8">
              <img src={`${import.meta.env.BASE_URL}scg.png`} alt="SCG Logo" className="h-20 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00ff41] to-blue-500 bg-clip-text text-transparent">
                SYSTEM UPGRADE: 2026
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Legacy year 2025 archived. New features deployed.
                <span className="block mt-2 text-[#00ff41]">Version 2026.1.0 is now live.</span>
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team, index) => (
                <TeamCard
                  key={team.name}
                  {...team}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <footer className="mt-20 text-center text-gray-600 text-sm">
              <p>Execute command: <code>celebrate --all</code></p>
              <p className="mt-2">&copy; {new Date().getFullYear()} SCG Development Team</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    </div>
  );
}

export default App;
