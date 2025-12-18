<script lang="ts">
  import "@fontsource/newsreader/400.css";
  import "@fontsource/newsreader/400-italic.css";
  import { fly } from "svelte/transition";

  import { onMount } from "svelte";
  import "../app.css";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  let shouldAnimate = true;

  onMount(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    shouldAnimate = !isMobile && !prefersReduced;
  });
</script>

<svelte:head>
  <!-- Google tag (gtag.js) -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-C52WW6J2BG"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-C52WW6J2BG");
  </script>
</svelte:head>

<Header />
{#key data.pathname}
  <main
    in:fly={shouldAnimate
      ? { x: -10, duration: 300, delay: 300 }
      : { duration: 0 }}
    out:fly={shouldAnimate ? { y: 5, duration: 300 } : { duration: 0 }}
  >
    <slot />
  </main>
{/key}
<Footer />
