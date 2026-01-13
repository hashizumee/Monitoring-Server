import React from 'react';
import { Activity } from 'lucide-react';

const Alert = ({ type, message }) => {
  const colors = {
    danger: 'from-red-500/20 to-red-600/20 border-red-500/50 text-red-400',
    warning: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/50 text-yellow-400',
    info: 'from-blue-500/20 to-blue-600/20 border-blue-500/50 text-blue-400'
  };

  return (
    <div className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${colors[type]} backdrop-blur-xl border mb-3 animate-pulse`}>
      <Activity className="w-5 h-5" />
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Alert;
