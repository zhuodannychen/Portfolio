<script lang="ts">
  type Writing = {
    title: string;
    author: string | null;
    date: Date;
    link: string;
  }

  export let data: Writing[];
</script>

<ul class="list-disc pl-6 space-y-1">
  {#each data as item}
    <li class="text-neutral-600">
      <a
        href={item.link}
        class="hover:text-neutral-800 hover:underline transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        {item.title} {#if item.author && item.author.trim()} by {item.author}{/if} <span class="text-neutral-400">... {item.date}</span>
      </a>
    </li>
  {/each}
</ul>


