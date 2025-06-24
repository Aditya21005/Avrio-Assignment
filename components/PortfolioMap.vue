<template>
  <div class="flex flex-col md:flex-row gap-4 p-6">
    <!-- Portfolio detail table -->
    <div class="bg-white rounded-lg p-4 shadow flex-1">
      <div class="font-semibold mb-2">Portfolio Detail</div>
      <input v-model="search" placeholder="Search" class="border px-2 py-1 rounded w-full mb-2" />
      <table class="min-w-full text-xs">
        <thead>
          <tr>
            <th class="px-2 py-1">ID</th>
            <th class="px-2 py-1">Building Name</th>
            <th class="px-2 py-1">EUI</th>
            <th class="px-2 py-1">Power Factor</th>
            <th class="px-2 py-1">High Priority Tickets</th>
            <th class="px-2 py-1">Total Asset</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="building in filteredBuildings" :key="building.id" @click="select(building)" :class="{ 'bg-green-50': building.id === selected.id }">
            <td class="px-2 py-1">{{ building.id }}</td>
            <td class="px-2 py-1">{{ building.name }}</td>
            <td class="px-2 py-1">{{ building.eui }}</td>
            <td class="px-2 py-1">{{ building.powerFactor }}</td>
            <td class="px-2 py-1">{{ building.highPriorityTickets }}</td>
            <td class="px-2 py-1">{{ building.totalAsset }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Map -->
    <div class="bg-white rounded-lg p-4 shadow flex-1">
      <div class="font-semibold mb-2">Stores Map View</div>
      <div class="relative h-64 w-full">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg" class="absolute inset-0 w-full h-full object-cover rounded" />
        <div v-if="selected" class="absolute top-1/2 left-1/2 bg-white border shadow px-4 py-2 rounded -translate-x-1/2 -translate-y-1/2">
          <div class="font-bold">{{ selected.name }} : {{ selected.id }}</div>
          <div class="text-xs">Building EUI: {{ selected.eui }}</div>
          <div class="text-xs">Monthly Energy Consumption: {{ selected.energy }}</div>
          <div class="text-xs">Power Factor: {{ selected.powerFactor }}</div>
          <div class="text-xs">High Priority Open Tickets: {{ selected.highPriorityTickets }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const buildings = [
  { id: 'DEL061', name: 'Epicuria Rajouri', eui: 104.6, powerFactor: 0.913, highPriorityTickets: 0, totalAsset: 77, energy: 2528.19 },
  // ... more demo data
]
const selected = ref(buildings[0])
const search = ref('')
const filteredBuildings = computed(() =>
  buildings.filter(b => b.name.toLowerCase().includes(search.value.toLowerCase()))
)
const select = b => (selected.value = b)
</script>