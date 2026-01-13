import React, { useState, useEffect } from 'react';
import { Activity, Cpu, HardDrive, Wifi, WifiOff } from 'lucide-react';
import StatusCard from './components/StatusCard';
import MetricCard from './components/MetricCard';
import Alert from './components/Alert';
import ChartCard from './components/ChartCard';
import { generateMetrics } from './utils/mockData';

const App = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [metrics, setMetrics] = useState(generateMetrics());
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMetrics = generateMetrics();
      setMetrics(newMetrics);
      setIsOnline(Math.random() > 0.05);
      
      setHistory(prev => {
        const updated = [...prev, newMetrics];
        return updated.slice(-15);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 md:p-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-slate-700/50">
              <Activity className="w-8 h-8 text-blue-400" />
            </div>
            Server Monitor
          </h1>
          <p className="text-slate-400 ml-16">Real-time infrastructure monitoring dashboard</p>
        </div>

        {/* Status Card */}
        <div className="mb-6">
          <StatusCard isOnline={isOnline} />
        </div>

        {/* Alerts */}
        <div className="mb-6">
          {metrics.cpu > 80 && <Alert type="danger" message="⚠ CPU usage critically high!" />}
          {metrics.ram > 80 && <Alert type="warning" message="⚠ Memory usage elevated" />}
          {metrics.netIn > 800 && <Alert type="info" message="📊 High network traffic detected" />}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-6">
          <MetricCard 
            icon={Cpu} 
            title="CPU Usage" 
            value={metrics.cpu} 
            unit="%" 
            color="blue"
            trend={5}
          />
          <MetricCard 
            icon={HardDrive} 
            title="Memory" 
            value={metrics.ram} 
            unit="%" 
            color="purple"
          />
          <MetricCard 
            icon={Wifi} 
            title="Network In" 
            value={metrics.netIn} 
            unit="Mbps" 
            color="emerald"
            trend={12}
          />
          <MetricCard 
            icon={WifiOff} 
            title="Network Out" 
            value={metrics.netOut} 
            unit="Mbps" 
            color="cyan"
          />
          <MetricCard 
            icon={Activity} 
            title="Latency" 
            value={metrics.latency} 
            unit="ms" 
            color="pink"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="CPU Performance" dataKey="cpu" color="blue" history={history} />
          <ChartCard title="Memory Usage" dataKey="ram" color="purple" history={history} />
        </div>

        <div className="mt-6">
          <ChartCard title="Network Traffic (Incoming)" dataKey="netIn" color="emerald" history={history} />
        </div>
      </div>
    </div>
  );
};

export default App;
