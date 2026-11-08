<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";

  const facts = [
    "Shenzhen → Paris → Dallas → College Station → Silicon Valley",
    "A friend installed Vim in all my editors when I first started coding. Now I breathe Vim.",
    "Fastest 3×3 Rubik's Cube solve: 14.68 seconds",
    "I can do windmills",
    "Currently into AI tooling and Bitcoin",
  ];
</script>

<Seo
  title="Danny Chen"
  description="Home page of Danny Chen, a software engineer in the Bay Area"
  keywords="Danny Chen, Portfolio, Software Engineer"
  url="https://dannychen.me"
/>

<div class="layout-lg text-lg leading-relaxed">
  <!-- Intro -->
  <section class="flex items-center gap-5 mb-10">
    <img
      alt="Portrait of Danny Chen"
      src="/assets/images/profile1.jpg"
      class="w-20 h-20 rounded-full object-cover flex-shrink-0"
    />
    <p class="text-xl leading-snug text-black dark:text-white">
      Software engineer at
      <a class="link" href="https://meta.com/" target="_blank" rel="noreferrer"
        >Meta</a
      >, building
      <a
        class="link"
        href="https://www.facebook.com/business/tools/meta-pixel"
        target="_blank"
        rel="noreferrer">Meta Pixel</a
      >.
      <span class="text-neutral-500 dark:text-neutral-400">Also a trader.</span>
    </p>
  </section>

  <!-- Bio -->
  <section class="space-y-5 mb-14">
    <p>
      I love solving hard problems and building products that make an impact.
      My interests span AI, blockchains, and competitive programming, and I've
      shipped across web, mobile, machine learning, cloud, and smart contracts.
      Outside of tech, I'm into finance: researching stocks, exploring crypto,
      and thinking about the future of money.
    </p>
    <p>
      In my free time I play pickleball,
      <a
        class="link"
        href="https://www.instagram.com/danny.vibes.02/"
        target="_blank"
        rel="noreferrer">dance (hip hop and breaking)</a
      >, take long walks, suck at basketball, and cook.
    </p>
  </section>

  <!-- Fun facts -->
  <section>
    <h2 class="heading2 !text-xl !mb-4">Fun facts</h2>
    <ul class="space-y-2 text-base text-neutral-500 dark:text-neutral-400">
      {#each facts as fact}
        <li class="flex gap-3">
          <span class="text-neutral-300 dark:text-neutral-600 select-none">—</span>
          <span>{fact}</span>
        </li>
      {/each}
    </ul>
  </section>
</div>

