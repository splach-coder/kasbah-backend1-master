// /schemas/roomType.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'roomType',
  title: 'Room Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'e.g., "Superior Rooms"',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      description: 'The primary image used for cards and previews.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      description: 'A brief summary for the card on the main Rooms & Rates page.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      description: 'The main descriptive text for the room\'s detail page.',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'gallery',
        title: 'Image Gallery',
        description: 'Images for the slider on the room\'s detail page.',
        type: 'array',
        of: [{ 
            type: 'image',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Alternative text' }
            ]
        }],
        validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'totalRooms',
      title: 'Total Number of this Room Type',
      type: 'number',
    }),
    defineField({
      name: 'bedConfiguration',
      title: 'Bed Configuration',
      type: 'string',
      description: 'e.g., "Beds can be made up as two singles or one king size double."',
    }),
    defineField({
      name: 'features',
      title: 'Room Features',
      description: 'Add key features, one per line.',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'bathroomFeatures',
      title: 'Bathroom Features',
      description: 'Add bathroom features, one per line.',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'pricingInfo',
      title: 'Pricing Information',
      type: 'string',
      description: 'e.g., "Prices vary according to the time of year. See Room Rates."',
    }),
    defineField({
      name: 'bookingLink',
      title: 'Direct Booking Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'mainImage',
    },
  },
})
