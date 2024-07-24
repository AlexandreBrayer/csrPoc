import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const csr = false;

const schema = z.object({
	result: z.string().regex(/^[-+]?\d*\.?\d+$/, 'Result must be a valid number')
});

export const load = async () => {
	const form = await superValidate(zod(schema));
	return { form };
};

import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		if (!form.valid) {
			return fail(400, { form });
		}

		if (form.data.result === '5') {
			return message(form, { text: 'Correct!', formData: form.data });
		}

		return message(form, { text: 'Incorrect!', formData: form.data });
	}
};
