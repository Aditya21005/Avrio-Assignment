<template>
  <div>
    <client-only>
      <Bar :data="chartData" :options="options" />
    </client-only>
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

const props = defineProps(['chartData'])

const options = {
  responsive: true,
  plugins: { legend: { display: true } }
}
</script>
