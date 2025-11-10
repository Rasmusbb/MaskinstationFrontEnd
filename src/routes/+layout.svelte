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
		background-image: url(https://localhost:7006/api/Gallery/GetProfilPic?ImageID=19ad142b-5d3a-4ff0-a5e2-08de1ecacf0a);
		background-size: cover;
		background-position: center;
		background-attachment: fixed; 
		background-repeat: no-repeat;
		overflow-x: hidden; 
  }
</style>