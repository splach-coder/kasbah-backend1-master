// /schemas/gardensPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gardensPage',
  title: 'Gardens Page',
  type: 'document',
  fields: [
    // This is for internal organization in Sanity
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Gardens Page',
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

    // --- Introduction Section ---
    defineField({
        name: 'introduction',
        title: 'Introduction Text',
        type: 'text',
        rows: 3,
        validation: (Rule) => Rule.required(),
    }),

    // --- Features Section ---
    defineField({
        name: 'features',
        title: 'Feature Sections',
        description: 'Add the alternating image-and-text sections for this page.',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
                defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
                defineField({ 
                    name: 'imagePosition', 
                    title: 'Image Position', 
                    type: 'string',
                    options: {
                        list: [ {title: 'Left', value: 'left'}, {title: 'Right', value: 'right'} ],
                        layout: 'radio'
                    },
                    validation: (Rule) => Rule.required()
                }),
            ],
            preview: {
                select: {
                    title: 'title',
                    media: 'image'
                }
            }
        }]
    })
  ],
})
