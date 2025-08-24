// /schemas/pressReview.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pressReview',
  title: 'Press Review',
  type: 'document',
  fields: [
    defineField({
      name: 'publication',
      title: 'Publication Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Article Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Publication Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'publication',
      subtitle: 'title',
      media: 'logo',
    },
  },
})
