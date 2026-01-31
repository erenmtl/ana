import { Game } from './types';

export const POPULAR_GAMES: Game[] = [
  // FPS / Shooter
  { id: 'valorant', name: 'Valorant', platform: 'PC', icon: '🎯' },
  { id: 'cs2', name: 'Counter-Strike 2', platform: 'PC', icon: '💣' },
  { id: 'pubg_mobile', name: 'PUBG Mobile', platform: 'Mobile', icon: '🍗' },
  { id: 'cod_mobile', name: 'Call of Duty: Mobile', platform: 'Mobile', icon: '🎖️' },
  { id: 'apex', name: 'Apex Legends', platform: 'PC', icon: '🤖' },
  { id: 'fortnite', name: 'Fortnite', platform: 'Cross-Platform', icon: '⛏️' },
  
  // MOBA
  { id: 'lol', name: 'League of Legends', platform: 'PC', icon: '⚔️' },
  { id: 'dota2', name: 'Dota 2', platform: 'PC', icon: '🛡️' },
  { id: 'wildrift', name: 'LoL: Wild Rift', platform: 'Mobile', icon: '📱' },
  
  // Sandbox / RPG / Other
  { id: 'minecraft', name: 'Minecraft', platform: 'Cross-Platform', icon: '🧱' },
  { id: 'roblox', name: 'Roblox', platform: 'Cross-Platform', icon: '🟥' },
  { id: 'gta5', name: 'GTA V', platform: 'PC', icon: '🚗' },
  { id: 'genshin', name: 'Genshin Impact', platform: 'Cross-Platform', icon: '✨' },
  { id: 'fifa', name: 'EA FC 24 (FIFA)', platform: 'PC', icon: '⚽' },
];
