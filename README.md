# Deskripsi

Aplikasi Web Monitoring Jaringan yang menampilkan status 3 perangkat nyata (Laptop, HP1, HP2) dalam 1 jaringan WiFi.
Fitur realtime menggunakan Express + Socket.IO, dan melakukan pengecekan status device dengan ICMP Ping.

### Aplikasi menampilkan:

- Status device (online/offline)
- Latency (ms)
- Grafik bandwidth realtime
- Log aktivitas realtime

# Struktur Project
```
/tugas web monitoring
│── server.js
│── devices.js
│── package.json
│── /public
│     ├── index.html
│     ├── script.js
│     └── style.css
```
# Cara Menjalankan
### 1. Masuk ke folder project
```
cd "C:\Users\ASUS\Desktop\tugas web monitoring"
```
### 2. Install semua module yang diperlukan
```
npm install express socket.io ping
```
### 3. Jalankan server
```
node server.js
```
### 4. Buka aplikasi di browser
```
http://localhost:3000
```

Aplikasi akan langsung menampilkan:

- Tabel status perangkat realtime
- Grafik bandwidth
- Log histori

# Perangkat yang Dimonitor

Aplikasi ini memonitor 3 perangkat real dalam 1 WiFi:

- Laptop — IP: 192.168.1.3
- HP 1 — IP: 192.168.1.7
- HP 2 — IP: 192.168.1.8

Semua status diambil melalui ping setiap 2 detik.

# Teknologi yang Digunakan

- Node.js (Express)
- Socket.IO (Realtime communication)
- Ping (ICMP device check)
- HTML + CSS
- Chart.js (Grafik realtime)

# Author

Nama: andrean trissuryadi |
NIM: 241091900437 |
Mata Kuliah: Komunikasi Data
