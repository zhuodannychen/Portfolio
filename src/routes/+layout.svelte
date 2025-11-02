<script lang="ts">
  import "@fontsource/newsreader/400.css";
  import "@fontsource/newsreader/400-italic.css";
  import '../app.css';

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

