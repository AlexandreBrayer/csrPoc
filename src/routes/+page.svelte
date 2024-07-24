<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, message, errors } = superForm(data.form);
</script>

<form method="POST">
	<label for="result">5 x 10 ?</label>
	<input type="text" id="result" name="result" placeholder="réponse" bind:value={$form.result} />
	{#if $errors.result}<span class="invalid">{$errors.result}</span>{/if}
	<button type="submit">Submit</button>
</form>

{#if $message}
	<p>{$message}</p>
{/if}

<style>
	.invalid {
		color: red;
	}
</style>
