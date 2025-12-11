const socket = io();
const tableBody = document.querySelector("#deviceTable tbody");
const logBox = document.getElementById("logBox");

// Chart setup
const ctx = document.getElementById("chart");
const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "Total Bandwidth",
            data: [],
            borderWidth: 2
        }]
    },
    options: { responsive: true }
});

// Update device table
socket.on("update", (devices) => {
    tableBody.innerHTML = "";
    let totalBW = 0;

    devices.forEach(d => {
        totalBW += d.bandwidth;
        tableBody.innerHTML += `
            <tr>
                <td>${d.name}</td>
                <td>${d.ip}</td>
                <td class="${d.status}">${d.status}</td>
                <td>${d.latency}</td>
                <td>${d.bandwidth}</td>
            </tr>
        `;
    });

    // push to chart
    chart.data.labels.push(new Date().toLocaleTimeString());
    chart.data.datasets[0].data.push(totalBW);

    if (chart.data.labels.length > 20) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();
});

// Realtime logs
socket.on("log", (logs) => {
    logBox.innerHTML = logs.map(l => `<p>${l}</p>`).join("");
});
