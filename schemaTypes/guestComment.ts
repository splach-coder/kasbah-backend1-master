// /schemas/guestComment.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'guestComment',
  title: 'Guest Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    // Optional: Add a field for the guest's name if you want
    // defineField({
    //   name: 'guestName',
    //   title: 'Guest Name',
    //   type: 'string',
    // }),
  ],
  preview: {
    select: {
      title: 'comment',
    },
  },
})
