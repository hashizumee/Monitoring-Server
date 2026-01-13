# 🖧 Server Monitor - Modern Futuristic Dashboard

Dashboard monitoring server real-time dengan desain futuristik menggunakan React + Tailwind CSS.

## ✨ Fitur

- 🎨 **Glassmorphism Design** - Efek kaca transparan dengan backdrop blur
- 📱 **Mobile-First Responsive** - Otomatis adjust dari mobile ke desktop
- ⚡ **Real-time Updates** - Data update otomatis setiap 2 detik
- 📊 **Live Charts** - Grafik real-time untuk CPU, RAM, dan Network
- 🚨 **Smart Alerts** - Notifikasi otomatis saat metrics tinggi
- 🌙 **Dark Mode** - Full dark theme aesthetic

## 🛠️ Teknologi

- React 18
- Tailwind CSS
- Recharts (untuk grafik)
- Lucide React (untuk icons)

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm start

# Build untuk production
npm build
```

## 📁 Struktur Project

```
server-monitor/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── StatusCard.jsx      # Status server online/offline
│   │   ├── MetricCard.jsx      # Card untuk metrics individual
│   │   ├── Alert.jsx           # Alert notifications
│   │   └── ChartCard.jsx       # Grafik real-time
│   ├── utils/
│   │   └── mockData.js         # Generate mock data
│   ├── App.jsx                 # Main component
│   ├── index.js                # Entry point
│   └── index.css               # Tailwind directives
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Responsive Breakpoints

- **Mobile** (default): Single column
- **sm** (640px+): 2 kolom untuk metrics
- **lg** (1024px+): 3 kolom + 2 kolom charts
- **xl** (1280px+): 5 kolom untuk metrics penuh

## 🚀 Cara Pakai

Setelah `npm start`, aplikasi akan membuka di `http://localhost:3000`

Dashboard akan menampilkan:
- Status server (online/offline) dengan animasi pulse
- 5 metric cards: CPU, RAM, Network In/Out, Latency
- Alerts otomatis jika CPU/RAM > 80% atau Network > 800 Mbps
- 3 grafik real-time yang update setiap 2 detik

## 🎨 Kustomisasi

Edit `src/utils/mockData.js` untuk mengubah range data atau interval update.

Edit `tailwind.config.js` untuk menambah warna atau animasi custom.

## 📝 Catatan

- Data adalah mock/dummy untuk demo purposes
- Untuk production, ganti dengan API call ke server monitoring real
- Chart menyimpan 15 data points terakhir
