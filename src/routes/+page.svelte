<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
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
  <div class="flex flex-col md:flex-row gap-8 items-start">
    <!-- Profile Picture - Left Side -->
    <div class="flex-shrink-0">
      <img
        alt="Portrait of Danny Chen"
        src="/assets/images/profile1.jpg"
        class="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-neutral-200 dark:border-neutral-700"
      />
    </div>

    <!-- Fun facts Section - Right Side -->
    <div class="md:pl-8">
      <h2 class="text-black text-xl font-semibold mb-4">Fun Facts</h2>
      <ul class="text-neutral-600 list-disc pl-8">
        <li>
          <span>Shenzhen</span>
          <ArrowRight size={12} class="inline-block" />
          <span>Paris</span>
          <ArrowRight size={12} class="inline-block" />
          <span>Dallas</span>
          <ArrowRight size={12} class="inline-block" />
          <span>College Station</span>
          <ArrowRight size={12} class="inline-block" />
          <span>Silicon Valley</span>
        </li>
        <li>When I first started programming, my friend downloaded Vim in all of my text editors/IDEs... now I breathe Vim.</li>
        <li>My fastest solve-time on a 3x3 Rubik's Cube is 14.68 seconds.</li>
        <li>I can do windmills.</li>
        <li>Current interests: AI, Bitcoin, full-stack dev</li>
      </ul>
    </div>
  </div>

  <!-- Bio Section - Below Profile Pic -->
  <div class="space-y-5 text-lg leading-relaxed">
    <p>
      Hi!👋 I am currently a software engineer at <a class="link" href="https://meta.com/" target="_blank">Meta</a> working on the Facebook Lite app. I love building products that make an impact and bring people joy.
    </p>
    <p>
      I'm passionate about learning, teaching, and just creating things in general (like this website). My interest spans across AI, blockchains, software development, and competitive programming.
      In the past, I have worked on projects involving web dev, mobile dev, machine learning, cloud, and smart contracts.
    </p>
    <p>
      Aside from tech, I'm also into finance -- from researching stocks and exploring the crypto wild west to learning about the future of money and just having convos with my friends on the next big thing.
    </p>
    <p>
      In my free time, I enjoy playing pickleball, <a class="link" href="https://www.instagram.com/danny.vibes.02/" target="_blank">dancing (hip hop and breaking)</a>, pondering on long walks, sucking at basketball, and cooking delicious food!
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