// /schemas/diningPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'diningPage',
  title: 'Dining Page (Restaurant/Bar)',
  type: 'document',
  fields: [
    // --- Core Information ---
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
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    
    // --- Page Content ---
    defineField({
      name: 'headerBackgroundImage',
      title: 'Header Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'description',
        title: 'Description Paragraphs',
        description: 'Add each paragraph of the description as a separate item.',
        type: 'array',
        of: [{ type: 'text', rows: 3 }],
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'features',
        title: 'Key Features',
        description: 'e.g., "Fine Moroccan Wines", "Sunny Terraces"',
        type: 'array',
        of: [{ type: 'string' }],
        options: { layout: 'tags' },
        validation: (Rule) => Rule.max(4),
    }),
    defineField({
        name: 'gallery',
        title: 'Image Gallery',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
        validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'headerBackgroundImage',
    },
  },
})
