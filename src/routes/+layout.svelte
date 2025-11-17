<script>
	import Header  from "$lib/Compontnets/header/Header.svelte";
	import favicon from '$lib/assets/Logo.avif';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Header></Header>
{@render children()}

<style>
	:global(body) {
		margin: 0;
		height: 100%;
		background-image: url(https://localhost:7006/api/Gallery/GetFirstPicByTag?GalleryID=4c67681d-d914-467c-8f9e-52e9181baeb6&TagName=Background);
		background-size: cover;
		background-position: center;
		background-attachment: fixed; 
		background-repeat: no-repeat;
		overflow-x: hidden; 
  }
</style>