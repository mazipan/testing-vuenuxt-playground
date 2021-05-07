<template>
  <header class="header">
    <img class="img-logo" src="/logo-small.png" alt="Logo" />
    <h1>Pokemon App</h1>
  </header>
</template>

<style>
.header {
  @apply fixed w-full top-0 left-0 p-4 z-20 flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white;
}

.img-logo {
  @apply w-12 mr-4;
}
</style>
