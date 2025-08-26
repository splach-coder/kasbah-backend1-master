// /schemas/termsPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'termsPage',
  title: 'Terms & Conditions Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Terms & Conditions Page',
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

    // --- Terms Sections ---
    defineField({
        name: 'termsSections',
        title: 'Terms Sections',
        description: 'Add each section of the terms and conditions.',
        type: 'array',
        of: [{
            type: 'object',
            name: 'termSection',
            title: 'Term Section',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Section Title',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'content',
                    title: 'Content',
                    type: 'text',
                    rows: 4,
                    validation: (Rule) => Rule.required(),
                })
            ],
            preview: {
                select: {
                    title: 'title'
                }
            }
        }]
    })
  ],
})
