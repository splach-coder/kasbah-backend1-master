// /schemas/objects/priceVariant.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'priceVariant',
  title: 'Price Variant',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Variant Type/Name',
      type: 'string',
      description: 'e.g., "Starting from Kasbah Angour" or "Sidi Fares Villages"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prices',
      title: 'Prices per person (for 2, 3, 4, 5, 6 people)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Enter the price for each group size. Use "enquire" or "-" for non-applicable fields.',
      validation: (Rule) => Rule.length(5),
    }),
  ],
})
