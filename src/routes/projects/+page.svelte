<script lang="ts">
  import { onMount } from "svelte";
  import Project from "./Project.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { Calendar, Star } from "lucide-svelte";

  const projects = import.meta.glob("../../projects/*.md", {
    eager: true,
  }) as any;
  const images = import.meta.glob("../../projects/*.{jpg,png,svg}", {
    eager: true,
  }) as any;

  let sortBy: "date" | "stars" = "date";
  let stars: Record<string, number> = {};

  $: projectsByDate = Object.keys(projects).sort((a, b) => {
    const dateA = projects[a].attributes?.date
      ? new Date(projects[a].attributes.date).getTime()
      : 0;
    const dateB = projects[b].attributes?.date
      ? new Date(projects[b].attributes.date).getTime()
      : 0;
    return dateB - dateA;
  });

  $: projectsByStars = Object.keys(projects).sort((a, b) => {
    const starsA = stars[projects[a].attributes?.repo] ?? 0;
    const starsB = stars[projects[b].attributes?.repo] ?? 0;
    return starsB - starsA;
  });

  // fetch all personal projects with one API call
  async function fetchPersonalRepos() {
    try {
      const response = await fetch(
        "https://api.github.com/users/zhuodannychen/repos?per_page=100",
      );
      if (response.ok) {
        const personalRepos = await response.json();
        for (const repo of personalRepos) {
          stars[repo.full_name] = repo.stargazers_count;
        }
      }
    } catch (error) {
      console.error(`Failed to fetch personal repos:`, error);
    }
  }

  async function fetchRepoByFullName(fullName: string) {
    try {
      const response = await fetch(`https://api.github.com/repos/${fullName}`);
      if (response.ok) {
        const data = await response.json();
        stars[fullName] = data.stargazers_count;
      }
    } catch (error) {
      console.error(`Failed to fetch stars for ${fullName}:`, error);
    }
  }

  // Fetch star counts for any repos not in the personal repos list
  async function fetchMissingRepos() {
    for (const id of projectsByDate) {
      const fullName = projects[id].attributes?.repo;
      if (!fullName) continue;
      if (!(fullName in stars)) {
        await fetchRepoByFullName(fullName);
      }
    }
  }

  onMount(async () => {
    await fetchPersonalRepos();
    await fetchMissingRepos();
  });
</script>

<Seo
  title="Danny Chen - Projects"
  description="Open source projects by Danny Chen"
  keywords="Danny Chen, Projects"
  url="https://dannychen.me/projects"
/>

<div class="flex justify-center mb-4 space-x-2">
  <button
    class="flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors {sortBy ===
    'date'
      ? 'bg-neutral-200 text-neutral-900'
      : 'text-neutral-500 hover:text-neutral-900'}"
    on:click={() => (sortBy = "date")}
  >
    <Calendar size={14} class="mr-1" />
    by Date
  </button>
  <button
    class="flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors {sortBy ===
    'stars'
      ? 'bg-neutral-200 text-neutral-900'
      : 'text-neutral-500 hover:text-neutral-900'}"
    on:click={() => (sortBy = "stars")}
  >
    <Star size={14} class="mr-1" />
    by Stars
  </button>
</div>

<div class="layout-lg space-y-8">
  {#each sortBy === "date" ? projectsByDate : projectsByStars as id (id)}
    <Project data={projects[id]} {images} {stars} />
  {/each}
</div>
