<script lang="ts">
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<main class="flex min-h-screen items-center justify-center bg-gray-900 text-white">
  <div class="max-w-4xl mx-auto px-8 py-16 text-center">
    <h1 class="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
      Hello Svelte + Vite + TypeScript + Tailwind!
    </h1>
    <div class="p-8">
      <button
        on:click={increment}
        class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        count is {count}
      </button>
    </div>
    <p class="mt-8 text-gray-400">
      Edit <code class="bg-gray-800 px-2 py-1 rounded font-mono text-sm">src/App.svelte</code> to get started
    </p>
  </div>
</main>
