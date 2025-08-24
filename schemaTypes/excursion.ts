// /schemas/excursion.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'excursion',
  title: 'Excursion',
  type: 'document',
  fields: [
    // --- Core Information & Card Content ---
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'card',
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
      group: 'card',
    }),
    defineField({
      name: 'cardDescription',
      title: 'Card Description',
      description: 'A short summary for the card on the overview page.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      group: 'card',
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'card',
    }),

    // --- Detail Page Content ---
    defineField({
        name: 'headerBackgroundImage',
        title: 'Header Background Image',
        type: 'image',
        options: { hotspot: true },
        validation: (Rule) => Rule.required(),
        group: 'pageContent',
    }),
    defineField({
        name: 'fullDescription',
        title: 'Full Description',
        description: 'The main content for the excursion detail page. You can use headings to structure different sections (e.g., "Walks starting from the Kasbah").',
        type: 'array', // Using Portable Text (rich text)
        of: [{type: 'block'}],
        group: 'pageContent',
    }),
     defineField({
        name: 'keyDetails',
        title: 'Key Details',
        description: 'Add key details like duration, difficulty, etc.',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'value', title: 'Value', type: 'string' }
            ]
        }],
        group: 'pageContent',
    }),
    defineField({
        name: 'gallery',
        title: 'Image Gallery',
        description: 'Images for the slider on the detail page with optional captions.',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: { hotspot: true },
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'caption',
                    title: 'Caption',
                    type: 'string',
                    description: 'Optional caption for this image (will appear on top-left corner of the slider)',
                }
            ],
            preview: {
                select: {
                    title: 'caption',
                    media: 'image',
                },
                prepare({ title, media }) {
                    return {
                        title: title || 'Image (no caption)',
                        media,
                    }
                }
            }
        }],
        validation: (Rule) => Rule.required().min(1),
        group: 'pageContent',
    }),
  ],
  groups: [
    { name: 'card', title: 'Card Content (For Overview Page)', default: true },
    { name: 'pageContent', title: 'Detail Page Content' },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cardImage',
    },
  },
})