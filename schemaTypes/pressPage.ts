// /schemas/pressPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pressPage',
  title: 'Press Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Press & Guest Comments',
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

    // --- Content Sections ---
    defineField({
        name: 'pressReviews',
        title: 'Press Reviews to Display',
        description: 'Select the press reviews you want to feature on the left column.',
        type: 'array',
        of: [{type: 'reference', to: {type: 'pressReview'}}],
        validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
        name: 'guestComments',
        title: 'Guest Comments to Display',
        description: 'Select the guest comments you want to feature on the right column.',
        type: 'array',
        of: [{type: 'reference', to: {type: 'guestComment'}}],
        validation: (Rule) => Rule.required().min(1),
    })
  ],
})
