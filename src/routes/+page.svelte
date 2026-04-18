<script lang="ts">
    const { data } = $props();

    const color = $derived(`rgb(${data.data.join(",")})`);
</script>


<div style="background-color: {color}">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</div>
