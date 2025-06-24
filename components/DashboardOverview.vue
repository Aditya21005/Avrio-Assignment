<template>
  <div class="space-y-6 p-6">
    <!-- Maintenance Overview -->
    <div class="bg-white rounded-lg p-4 shadow">
      <div class="font-semibold text-lg mb-2">Maintenance Overview</div>
      <div class="flex flex-wrap gap-5">
        <div
          v-for="status in statusSummary"
          :key="status.label"
          class="flex flex-col items-center min-w-[80px]"
        >
          <span :class="status.color + ' text-xl font-bold'">{{ status.value }}</span>
          <span class="text-xs">{{ status.label }}</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-5 mt-4">
        <div class="bg-gray-50 p-4 rounded w-48">
          <div class="text-xs text-gray-500">Ticket Resolution Within Due Date</div>
          <div class="font-semibold">{{ resolved }}/{{ total }}</div>
        </div>
        <div class="bg-gray-50 p-4 rounded w-48">
          <div class="text-xs text-gray-500">Maintenance Cost</div>
          <div class="font-semibold text-green-600">₹ {{ cost }}</div>
        </div>
        <div class="bg-gray-50 p-4 rounded w-64">
          <div class="text-xs text-gray-500">Priority Wise Ticket Resolution</div>
          <div class="flex gap-4 mt-1">
            <div>
              <span class="text-pink-500 font-bold">{{ high }} Days</span>
              <span class="block text-xs text-gray-500">High</span>
            </div>
            <div>
              <span class="text-orange-400 font-bold">{{ medium }} Days</span>
              <span class="block text-xs text-gray-500">Medium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Date Range Picker (demo only) -->
    <div class="bg-white rounded-lg p-4 shadow flex flex-col w-max">
      <div class="font-semibold mb-2">Select Date Range</div>
      <input type="date" v-model="dateRange[0]" class="border rounded px-2 py-1 mb-2" />
      <input type="date" v-model="dateRange[1]" class="border rounded px-2 py-1" />
      <div class="text-xs mt-2">Timezone: Asia/Kolkata</div>
    </div>
  </div>
</template>

<script setup>
const statusSummary = [
  { label: 'Open', value: 32, color: 'text-blue-500' },
  { label: 'In Progress', value: 11, color: 'text-yellow-400' },
  { label: 'On Hold', value: 1, color: 'text-purple-500' },
  { label: 'Waiting For Approval', value: 0, color: 'text-gray-400' },
  { label: 'Complete', value: 2469, color: 'text-green-500' },
  { label: 'Cancelled', value: 52, color: 'text-pink-500' }
]
const resolved = 881
const total = 2565
const cost = 0
const high = 15.45
const medium = 11.23
const dateRange = ref(['2024-09-01', '2024-09-30'])
</script>