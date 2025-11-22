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

<Seo
  title="Danny Chen"
  description="Home page of Danny Chen, a software engineer in the Bay Area"
  keywords="Danny Chen, Portfolio, Software Engineer"
/>
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
