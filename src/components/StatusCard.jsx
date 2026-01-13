import React from 'react';
import { Server } from 'lucide-react';

const StatusCard = ({ isOnline }) => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-6 shadow-2xl">
    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-500/20 backdrop-blur-sm">
            <Server className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Core Server</h2>
            <p className="text-sm text-slate-400">Primary Node</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <>
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 font-semibold">ONLINE</span>
            </>
          ) : (
            <>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-red-400 font-semibold">OFFLINE</span>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default StatusCard;
