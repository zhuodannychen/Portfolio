<script lang="ts">
  import { onMount } from 'svelte';
  import Project from './Project.svelte';

  const projects = import.meta.glob("../../projects/*.md", {
    eager: true,
  }) as any;
  const images = import.meta.glob("../../projects/*.{jpg,png,svg}", {
    eager: true,
  }) as any;

  // Sort projects by date (newest first)
  const projectsByDate = Object.keys(projects).sort((a, b) => {
    const dateA = projects[a].attributes?.date ? new Date(projects[a].attributes.date).getTime() : 0;
    const dateB = projects[b].attributes?.date ? new Date(projects[b].attributes.date).getTime() : 0;
    return dateB - dateA;
  });

  let stars: Record<string, number> = {};

  onMount(async () => {
    try {
      const response = await fetch("https://api.github.com/users/zhuodannychen/repos?per_page=100");
      if (!response.ok)
        return null;
      const personal_repos = await response.json();
      for (const repo of personal_repos) {
        stars[repo.full_name] = repo.stargazers_count
      }
    } catch (error) {
      console.error(`Failed to fetch stars`, error);
      return null;
    }
  });
</script>

<div class="layout-lg space-y-8">
  {#each projectsByDate as id (id)}
    <Project data={projects[id]} {images} stars={stars}/>
  {/each}
</div>



