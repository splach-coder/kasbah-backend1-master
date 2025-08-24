// /schemas/objects/excursionPrice.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'excursionPrice',
  title: 'Excursion Price',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Excursion Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prices',
      title: 'Prices (for simple excursions)',
      description: 'Use this field if the excursion has only one price row. Leave blank if using variants.',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(5),
    }),
    defineField({
      name: 'variants',
      title: 'Price Variants (for complex excursions)',
      description: 'Use this field if the excursion has multiple sub-types or routes. Leave blank if using the simple price field above.',
      type: 'array',
      of: [{type: 'priceVariant'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
})
