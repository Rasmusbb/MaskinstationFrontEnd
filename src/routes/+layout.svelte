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
		background-image: url(https://localhost:7006/api/Gallery/GetProfilPic?ImageID=96094777-6f47-479e-6789-08de1d64d96f);
		background-size: cover;
		background-position: center;
		background-attachment: fixed; 
		background-repeat: no-repeat;
		overflow-x: hidden; /* Prevent horizontal scroll */
  }
</style>