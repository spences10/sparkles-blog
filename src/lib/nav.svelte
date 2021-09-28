<script>
  import ThemeSelect from './theme-select.svelte'

  export let pages
</script>

<div
  class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
>
  <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold"> Sparkles Blog </span>
  </div>
  <div class="px-2 mx-2 navbar-center">
    <div class="flex items-stretch">
      <a class="btn btn-ghost btn-sm rounded-btn" href={`/`}>Home</a>
      {#each pages as { title, slug }}
        <a class="btn btn-ghost btn-sm rounded-btn" href={`/${slug}`}
          >{title}</a
        >
      {/each}
    </div>
  </div>
  <div class="navbar-end">
    <ThemeSelect />
  </div>
</div>
