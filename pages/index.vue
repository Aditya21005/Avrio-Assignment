<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="flex">
      <!-- Sidebar (simplified) -->
      <aside class="w-52 bg-white p-4 min-h-screen">
        <nav class="flex flex-col gap-4">
          <span class="font-bold text-lg">Home</span>
          <NuxtLink to="#">Buildings</NuxtLink>
          <NuxtLink to="#">Assets</NuxtLink>
          <NuxtLink to="#">Maintenance</NuxtLink>
          <NuxtLink to="#">Tickets</NuxtLink>
        </nav>
      </aside>
      <!-- Main content -->
      <main class="flex-1">
        <DashboardOverview />
        <TicketGraphs />
        <div class="mt-6">
          <div class="flex flex-wrap gap-4 justify-between px-6">
            <div class="bg-white rounded-lg p-4 shadow flex-1 text-center">
              <div class="text-sm">Total Buildings</div>
              <div class="text-2xl font-semibold">631</div>
            </div>
            <div class="bg-white rounded-lg p-4 shadow flex-1 text-center">
              <div class="text-sm">Total Assets</div>
              <div class="text-2xl font-semibold">54660</div>
            </div>
            <div class="bg-white rounded-lg p-4 shadow flex-1 text-center">
              <div class="text-sm">Total Users</div>
              <div class="text-2xl font-semibold">787</div>
            </div>
            <div class="bg-white rounded-lg p-4 shadow flex-1 text-center">
              <div class="text-sm">Total Floor Area</div>
              <div class="text-2xl font-semibold">246304.69 Sq. m.</div>
            </div>
            <div class="bg-white rounded-lg p-4 shadow flex-1 text-center">
              <div class="text-sm">Total Tickets</div>
              <div class="text-2xl font-semibold">38408</div>
            </div>
          </div>
        </div>
        <PortfolioMap />
      </main>
    </div>
  </div>
</template>

<script setup>
import DashboardOverview from '~/components/DashboardOverview.vue'
import TicketGraphs from '~/components/TicketGraphs.vue'
import PortfolioMap from '~/components/PortfolioMap.vue'
</script>