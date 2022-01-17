<script context="module">
  export const load = async ({ fetch, params }) => {
    const { slug } = params
    const res = await fetch(`/pages/${slug}.json`)
    if (res.ok) {
      const { page } = await res.json()
      return {
        props: { page },
      }
    }
  }
</script>

<script>
  export let page
</script>

<svelte:head>
  <title>Sparkles Blog | {page.title}</title>
</svelte:head>

<h1 class="text-4xl font-semibold mb-5">{page.title}</h1>

<article class="prose">
  {@html page.content.html}
</article>
