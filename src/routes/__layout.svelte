

<script>
  import Nav from '$lib/nav.svelte'
  import '../app.postcss'

  export let pages
</script>

<Nav {pages} />

<main class="container max-w-xl mx-auto px-4">
  <slot />
</main>
