<script lang="ts">
  import Project from './Project.svelte';

  const projects = import.meta.glob("../../projects/*.md", {
    eager: true,
  }) as any;
  const images = import.meta.glob("../../projects/*.{jpg,png,svg}", {
    eager: true,
  }) as any;

  // Sort projects by date (newest first)
  const projectsByDate = Object.keys(projects).sort((a, b) => {
    const dateA = projects[a].date ? new Date(projects[a].date).getTime() : 0;
    const dateB = projects[b].date ? new Date(projects[b].date).getTime() : 0;
    return dateB - dateA;
  });
</script>

<div class="layout-md space-y-12">
  {#each projectsByDate as id (id)}
    <Project data={projects[id]} {images}/>
  {/each}
</div>



