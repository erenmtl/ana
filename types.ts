export interface Game {
  id: string;
  name: string;
  platform: 'PC' | 'Mobile' | 'Cross-Platform';
  icon: string;
}

export interface ErrorSolution {
  title: string;
  steps: string[];
  severity: 'Low' | 'Medium' | 'High';
}

export interface CommonError {
  error: string;
  description: string;
}
