import type { z } from "zod";

import type { bookSchema } from "~/schema/book";

export type Book = z.infer<typeof bookSchema>;
