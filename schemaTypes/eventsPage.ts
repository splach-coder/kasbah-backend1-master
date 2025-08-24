// /schemas/eventsPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventsPage',
  title: 'Events & Weddings Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Events & Weddings',
      readOnly: true,
    }),
    
    // --- Header Section ---
    defineField({
      name: 'headerBackgroundImage',
      title: 'Header Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // --- Page Content ---
    defineField({
        name: 'introduction',
        title: 'Introduction Paragraphs',
        description: 'Add each paragraph of the main description as a separate item.',
        type: 'array',
        of: [{ type: 'text', rows: 4 }],
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'gallery',
        title: 'Image Gallery',
        description: 'Add all the images for the slider on this page.',
        type: 'array',
        of: [{ 
            type: 'image', 
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'A short description of the image for accessibility.'
                })
            ]
        }],
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
