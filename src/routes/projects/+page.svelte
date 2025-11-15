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

  // fetch all personal projects with one API call
  async function fetchPersonalRepos() {
    try {
      const response = await fetch("https://api.github.com/users/zhuodannychen/repos?per_page=100");
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

<div class="layout-lg space-y-8">
  {#each projectsByDate as id (id)}
    <Project data={projects[id]} {images} stars={stars}/>
  {/each}
</div>



