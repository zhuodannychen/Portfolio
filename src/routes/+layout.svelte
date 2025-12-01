<script lang="ts">
  import "@fontsource/newsreader/400.css";
  import "@fontsource/newsreader/400-italic.css";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import "../app.css";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Seo from "$lib/components/Seo.svelte";

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
{#key $page.url.pathname}
  <main
    in:fly={shouldAnimate
      ? { x: -10, duration: 350, delay: 450 }
      : { duration: 0 }}
    out:fly={shouldAnimate ? { y: 5, duration: 350 } : { duration: 0 }}
  >
    <slot />
  </main>
{/key}
<Footer />
