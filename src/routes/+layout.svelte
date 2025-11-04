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
		background-image: url(https://localhost:7006/api/Gallery/GetProfilPic?ImageID=5c092000-9564-4636-2357-08de1b90c6b6);
		background-size: cover;
		background-position: center;
		background-attachment: fixed; 
		background-repeat: no-repeat;
		overflow-x: hidden; /* Prevent horizontal scroll */
  }
</style>