<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, message, errors } = superForm(data.form);

	$form.result = $message?.formData.result ?? '';
</script>

<form method="POST">
	<label for="result">10 / 2 ?</label>
	<input type="text" id="result" name="result" placeholder="réponse" bind:value={$form.result} />
	{#if $errors.result}<span class="invalid">{$errors.result}</span>{/if}
	<button type="submit">Submit</button>
</form>

{#if $message?.text}
	<p>{$message.text}</p>
{/if}

<style>
	.invalid {
		color: red;
	}
</style>
