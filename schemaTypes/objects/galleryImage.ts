// /schemas/objects/galleryImage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'A short description of the image for accessibility.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'colSpan',
        title: 'Column Span',
        type: 'string',
        options: {
            list: [
                { title: '1 Column', value: 'md:col-span-1' },
                { title: '2 Columns', value: 'md:col-span-2' },
            ],
            layout: 'radio'
        },
        initialValue: 'md:col-span-1',
    }),
    defineField({
        name: 'rowSpan',
        title: 'Row Span',
        type: 'string',
        options: {
            list: [
                { title: '1 Row', value: 'md:row-span-1' },
                { title: '2 Rows', value: 'md:row-span-2' },
            ],
            layout: 'radio'
        },
        initialValue: 'md:row-span-1',
    }),
  ],
  preview: {
    select: {
        title: 'alt',
        media: 'image'
    }
  }
})
