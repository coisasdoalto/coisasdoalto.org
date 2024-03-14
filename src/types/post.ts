import { z } from 'zod'

import { postSchema } from '~/schema/post'

export type Post = z.infer<typeof postSchema> & {
  content: string
  slug: string
}
