import React, { useState } from 'react';
import { Game } from './types';
import GameSelector from './components/GameSelector';
import ProblemSolver from './components/ProblemSolver';

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 relative overflow-x-hidden font-sans">
      {/* Gamer Background - Grid & Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dark Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Radial Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <header className="mb-12 text-center relative">
          <div className="inline-block relative">
             <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-emerald-400 to-emerald-700 mb-2 tracking-tighter drop-shadow-lg">
              GAMEFIX
            </h1>
            <div className="absolute -inset-1 bg-emerald-500/20 blur-xl -z-10"></div>
          </div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-4">
            <span className="text-emerald-500 font-bold">OYUNCULAR İÇİN</span> TEKNİK DESTEK ÜSSÜ
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mt-6"></div>
        </header>

        <main className="transition-all duration-300 ease-in-out pb-20">
          {!selectedGame ? (
            <div className="animate-fade-in-up">
              <GameSelector 
                selectedGame={selectedGame} 
                onSelectGame={setSelectedGame} 
              />
              
              <div className="mt-12 text-center">
                <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-slate-800 via-emerald-500/50 to-slate-800">
                  <button 
                    onClick={() => setSelectedGame({ id: 'other', name: 'Diğer / Genel Sistem', platform: 'PC', icon: '🖥️' })}
                    className="bg-slate-900/90 hover:bg-slate-800 px-8 py-3 rounded-full text-slate-300 hover:text-white transition-all flex items-center gap-2 backdrop-blur-md"
                  >
                    <span>Listede yok mu?</span>
                    <span className="text-emerald-400 font-bold">Genel Sistem Çözümü</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <ProblemSolver 
              game={selectedGame} 
              onBack={() => setSelectedGame(null)} 
            />
          )}
        </main>

        <footer className="mt-auto text-center text-slate-600 text-sm py-8 border-t border-slate-800/50 backdrop-blur-sm">
          <p className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            SYSTEM ONLINE • Gemini 3 Flash Core • GameFix v1.0
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;