<script lang="ts">
  import { formatDate } from "$lib/utils";

  type Project = {
    html: string;
    attributes: {
      title: string;
      subtitle: string;
      date: string;
      image: string;
      repo: string;
      topics: string[];
    }
  }

  export let data: Project;
  export let images: Record<string, { default: string }>;
</script>

<div>
  <h3 class="text-black text-xl font-semibold mb-2">
    <span class="mr-1">{data.attributes.title}</span>
    {#if data.attributes.date}
      <small class="whitespace-nowrap text-neutral-500 text-base font-normal">
        {formatDate(data.attributes.date)}
      </small>
    {/if}
    <div class="flex flex-wrap mt-1">
      {#each data.attributes.topics as pill}
        <div class="pill">{pill}</div>
      {/each}
    </div>
  </h3>

  <div class="space-y-4">
    <div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
      <div class="col-span-3 md:col-span-2">
        {#if data.attributes.subtitle}
          <p class="text-lg font-light mb-3">{data.attributes.subtitle}</p>
        {/if}
        <div class="md-content">
          {@html data.html}
        </div>
      </div>
      <div class="col-span-3 md:col-span-1">
        <a rel="external" href={images[`../../projects/${data.attributes.image}`]?.default}>
          <img
            src={images[`../../projects/${data.attributes.image}`]?.default}
            alt="{data.attributes.title} preview image"
            class="rounded-md"
          />
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .md-content :global(p) {
    @apply mb-4;
  }

  .md-content :global(strong) {
    @apply font-semibold;
  }

  .md-content :global(code) {
    @apply text-[95%];
  }

  .pill {
    @apply flex items-center text-sm font-medium;
    @apply px-1.5 py-[1px] mr-1.5 mb-2 bg-neutral-100 rounded-full;
  }
</style>
