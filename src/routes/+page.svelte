<script lang="ts">
</script>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="danny-is"
>
  <span class="g">is a</span> software engineer<br />
  and trader.
</p>


<div class="layout-md text-lg space-y-14">
  <!-- Profile Picture and Interests - Side by Side -->
  <div class="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
    <!-- Profile Picture - Left Side -->
    <div class="flex-shrink-0">
      <img
        alt="Portrait of Danny Chen"
        src="/assets/images/profile1.jpg"
        class="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-neutral-200 dark:border-neutral-700"
      />
    </div>

    <!-- Interests Section - Right Side -->
    <div class="flex-1 md:pl-20">
      <h2 class="text-black text-xl font-semibold mb-4">Interests</h2>
      <ul class="text-neutral-600 list-disc pl-8">
        <li>AI</li>
        <li>Blockchains</li>
        <li>Full-stack</li>
        <li>Finance</li>
      </ul>
    </div>
  </div>

  <!-- Bio Section - Below Profile Pic -->
  <div class="space-y-5 text-lg leading-relaxed">
    <p>
      Hi!👋 I am currently a software engineer at <a class="link" href="https://meta.com/">Meta</a> working on the Facebook Lite app. I have long been interested in building products that are impactful and brings people joy.
    </p>
    <p>
      I'm very passionate about learning, teaching, and just creating things in general (like this website).
      In tech, I have an interest in AI, blockchains, software development, and competitive programming. In the past, I have worked on projects involving web dev, machine learning, and smart contracts.
      In finance, I enjoy researching on stocks, exploring the crypto wild west, learning about the future of money, and just having convos with my friends on the next big thing.
      In my free time, I enjoy playing pickleball, pondering on long walks, sucking at basketball, dancing (hip hop and breaking), and cooking delicious food!
    </p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>