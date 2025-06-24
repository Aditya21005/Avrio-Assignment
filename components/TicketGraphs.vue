<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Line Chart: Ticketing Rate Overtime -->
    <div class="bg-white rounded-lg p-4 shadow">
      <div class="font-semibold mb-2">Ticketing Rate Overtime</div>
      <div class="h-64">
        <LineChart :chartData="lineData" />
      </div>
    </div>

    <!-- Bar Chart: Ticket Status Overtime -->
    <div class="bg-white rounded-lg p-4 shadow">
      <div class="font-semibold mb-2">Ticket Status Overtime</div>
      <div class="h-64">
        <BarChart :chartData="barData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import LineChart from '@/components/chart/LineChart.vue'
import BarChart from '@/components/chart/BarChart.vue'

// Sample ticketing rate over time (line)
const lineData = {
  labels: Array.from({ length: 29 }, (_, i) => `Sep ${i + 1}`),
  datasets: [
    {
      label: 'Tickets',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.3,
      data: Array.from({ length: 29 }, () => Math.floor(Math.random() * 50))
    }
  ]
}

// Sample ticket status summary (bar)
const barData = {
  labels: ['Open', 'In Progress', 'Closed', 'On Hold'],
  datasets: [
    {
      label: 'Tickets',
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 206, 86, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1,
      data: [12, 19, 8, 5]
    }
  ]
}
</script>
