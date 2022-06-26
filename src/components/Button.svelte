<script>
	export let type = 'button';
	export let disabled = false;
	//export let kind: 'danger' | 'success' | 'dark' | 'basic' = 'basic';
	//export let size: 'small' | 'regular' = 'regular';
	//export let id ;
</script>

<button
	class:disabled
	{type}
	{disabled}
	on:click
>
	<slot />
</button>