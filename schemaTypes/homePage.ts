// /schemas/homePage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Home Page',
      readOnly: true,
    }),

    // --- Feature Sections ---
    defineField({
      name: 'features',
      title: 'Feature Sections',
      description: 'Select and reorder the feature sections to display on the homepage.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'feature'}}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
