// /schemas/diningPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'diningType',
  title: 'Dining Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'e.g., "Atlas Mountains Restaurant" or "Bar Azrou"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cardDescription',
      title: 'Card Description',
      description: 'A short summary for the card on the overview page.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    // Add other fields for the detail page later, e.g., gallery, full description etc.
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cardImage',
    },
  },
})
