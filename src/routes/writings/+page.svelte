<script lang="ts">
  import WritingList from "./WritingList.svelte";
  import writing from "./writings.yaml";
</script>

<div class="layout-md">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
    <div>
      <h2 class="heading2">Blog</h2>
      <ul class="list-disc pl-6">
        <li class="text-neutral-600">
          I sometimes blog on
          <a
            href="https://dannychen.substack.com"
            class="underline hover:text-neutral-800 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            substack
          </a>
        </li>
      </ul>

      <div class="mt-8">
        <h2 class="heading2">Books</h2>
        <WritingList data={writing.books} />
      </div>
    </div>

    <div>
      <h2 class="heading2">Tech</h2>
      <WritingList data={writing.tech} />

      <div class="mt-8">
        <h2 class="heading2">Finance</h2>
        <WritingList data={writing.finance} />
      </div>
    </div>
  </div>
</div>
