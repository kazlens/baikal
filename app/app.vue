<template>
  <main class="page">
    <DesktopPage />
    <MobilePage />
    <TabletPage />
  </main>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 256px;
  overflow: hidden;
  background-color: #ffffff;
}
</style>
