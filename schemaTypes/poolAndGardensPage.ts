// /schemas/poolAndGardensPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'poolAndGardensPage',
  title: 'Pool & Gardens Page',
  type: 'document',
  fields: [
    // This is for internal organization in Sanity
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Pool & Gardens Page',
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

    // --- Content Section ---
    defineField({
      name: 'description',
      title: 'Page Description',
      description: 'Description about the pool and gardens areas',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        }
      ],
      validation: (Rule) => Rule.required(),
    }),

    // --- Gallery ---
    defineField({
      name: 'gallery',
      title: 'Pool & Gardens Gallery',
      description: 'Upload images of both pool and gardens (recommended: 8-12 images)',
      type: 'array',
      of: [{ 
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', type: 'string', title: 'Alternative text' },
          { 
            name: 'caption', 
            type: 'string', 
            title: 'Caption (optional)',
            description: 'Brief description of the image'
          }
        ]
      }],
      validation: (Rule) => Rule.required().min(4).max(16),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'headerBackgroundImage',
    },
  },
})