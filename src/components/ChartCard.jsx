import React from 'react';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Activity } from 'lucide-react';

const ChartCard = ({ title, dataKey, color, history }) => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-6 shadow-2xl">
    <div className={`absolute top-0 left-0 w-40 h-40 bg-${color}-500/10 rounded-full blur-3xl`}></div>
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Activity className={`w-5 h-5 text-${color}-400`} />
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="timestamp" 
            stroke="#64748b" 
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <YAxis 
            stroke="#64748b" 
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0f172a', 
              border: '1px solid #334155',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color === 'blue' ? '#3b82f6' : color === 'purple' ? '#a855f7' : '#10b981'}
            strokeWidth={3}
            dot={false}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ChartCard;
