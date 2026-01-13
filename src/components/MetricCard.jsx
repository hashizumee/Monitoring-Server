import React from 'react';
import { TrendingUp } from 'lucide-react';

const MetricCard = ({ icon: Icon, title, value, unit, color, trend }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-6 shadow-2xl hover:scale-105 transition-all duration-300">
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/10 rounded-full blur-3xl group-hover:blur-2xl transition-all`}></div>
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-${color}-500/20 backdrop-blur-sm`}>
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-emerald-400 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>+{trend}%</span>
          </div>
        )}
      </div>
      <p className="text-sm text-slate-400 mb-1">{title}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-4xl font-bold text-white">{value}</h3>
        <span className="text-lg text-slate-400">{unit}</span>
      </div>
      <div className="mt-3 w-full bg-slate-700/30 rounded-full h-2">
        <div 
          className={`bg-gradient-to-r from-${color}-500 to-${color}-400 h-2 rounded-full transition-all duration-500`}
          style={{ width: `${Math.min(value, 100)}%` }}
        ></div>
      </div>
    </div>
  </div>
);

export default MetricCard;
