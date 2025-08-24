import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'room',
  type: 'document',
  title: 'Room',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price per night',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image' }],
    }),
  ],
})
