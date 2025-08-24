// /schemas/excursionsPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'excursionsPage',
  title: 'Excursions Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Excursions Overview Page',
      readOnly: false,
    }),
    
    // --- Header Section ---
    defineField({
      name: 'headerBackgroundImage',
      title: 'Header Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // --- Introduction Section ---
    defineField({
        name: 'overviewTitle',
        title: 'Overview Title',
        type: 'string',
        initialValue: 'Atlas Mountains Excursions',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'overviewDescription',
        title: 'Overview Description',
        type: 'text',
        rows: 4,
        validation: (Rule) => Rule.required(),
    }),

    // --- Excursions Grid ---
    defineField({
        name: 'excursions',
        title: 'Excursions to Display',
        description: 'Select the excursions you want to feature on this page.',
        type: 'array',
        of: [{type: 'reference', to: {type: 'excursion'}}],
        validation: (Rule) => Rule.required().min(1),
    })
  ],
})

