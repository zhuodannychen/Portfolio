<script lang="ts">
  export let school: string;
  export let subtitle: string;
  export let dates: string;
  export let location: string;
</script>

<div class="my-12">
  <div class="flex justify-between items-end">
    <h3 class="text-black text-lg">{school}</h3>
    <div class="text-neutral-500 mb-0.5">{dates}</div>
  </div>
  <div class="flex justify-between items-end mb-2">
    <p class="font-light">{subtitle}</p>
    <p class="text-neutral-500 mb-0.5">{location}</p>
  </div>
  <ul
    class="list-disc pl-7 marker:text-neutral-400 space-y-1"
  >
    <slot />
  </ul>
</div>