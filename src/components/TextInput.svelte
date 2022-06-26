<script>

	export let id
	export let label = null;
	export let placeholder
	export let value= null;
	export let readonly = false;
	export let border = false;
</script>

<div>
	{#if label}
		<label class="iroco-ui-label" for={id}>{label}</label>
	{/if}
	<input
		on:input
		bind:value
		{id}
		type="text"
		{placeholder}
		class:border
		{readonly}
	/>
</div>