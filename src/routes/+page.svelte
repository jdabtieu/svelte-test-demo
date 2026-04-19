<script lang="ts">
	import { onMount } from "svelte";
	import type { PageProps } from "./$types";

    let { data } = $props();


    const color = $derived(`rgb(${data.data.join(",")})`);
</script>

<div class="p-[10px]" style="background-color: {color}">
    <h1>Welcome to SvelteKit</h1>
    <p>Visisdfsdft <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</div>
