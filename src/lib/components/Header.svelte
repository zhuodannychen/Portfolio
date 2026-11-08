<script lang="ts">
  import { page } from "$app/stores";

  const links = [
    { name: "writings", href: "/writings" },
    { name: "projects", href: "/projects" },
    { name: "experiences", href: "/experiences" },
  ];

  let pageTitle: string | null = null;
  $: {
    const link = links.find(({ href }) => href === $page.url.pathname);
    if (link) {
      pageTitle = link.name.charAt(0).toUpperCase() + link.name.slice(1);
    } else {
      pageTitle = null;
    }
  }
</script>

<header
  class="layout-lg flex justify-between items-start"
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>
  <h1 class="font-serif font-medium text-black dark:text-white text-3xl mb-10">
    <a href="/" class="whitespace-nowrap">Danny Chen</a>
    {#if pageTitle}
      <span class="page-title">
        <span class="text-neutral-400 dark:text-neutral-600">—</span>
        {pageTitle}
      </span>
    {/if}
  </h1>
  <nav>
    {#each links as link (link)}
      <a
        href={link.href}
        class="hover:text-black dark:hover:text-white transition-colors"
        class:active={$page.url.pathname === link.href}
      >
        {link.name}
      </a>
    {/each}
  </nav>
</header>

<style lang="postcss">
  nav {
    @apply flex items-start text-neutral-500 justify-end space-x-5 text-base pt-2.5;
  }

  nav .active {
    @apply text-black dark:text-white;
  }

  .page-title {
    @apply font-light text-neutral-500;
  }

  @media (max-width: 580px) {
    .page-title {
      @apply block text-xl;
    }

    .page-title :first-child {
      @apply hidden;
    }
  }

  @media (max-width: 480px) {
    header {
      @apply flex-col mb-10;
    }

    h1 {
      @apply mb-1;
    }

    nav {
      @apply justify-start pt-0;
    }
  }
</style>
