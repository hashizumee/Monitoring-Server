// Generate mock server metrics
export const generateMetrics = () => ({
  cpu: Math.floor(Math.random() * 100),
  ram: Math.floor(Math.random() * 100),
  netIn: Math.floor(Math.random() * 1000),
  netOut: Math.floor(Math.random() * 1000),
  latency: Math.floor(Math.random() * 200),
  timestamp: new Date().toLocaleTimeString()
});
