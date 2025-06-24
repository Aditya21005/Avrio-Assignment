<template>
  <div>
    <client-only>
      <Line :data="chartData" :options="options" />
    </client-only>
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const props = defineProps(['chartData'])

const options = {
  responsive: true,
  plugins: { legend: { display: true } }
}
</script>
