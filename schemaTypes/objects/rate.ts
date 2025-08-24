// /schemas/objects/rate.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rate',
  title: 'Rate',
  type: 'object',
  fields: [
    defineField({
        name: 'roomType',
        title: 'Room Type',
        type: 'reference',
        to: [{type: 'roomType'}], // Links to your existing roomType schema
        validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'euro', title: 'Price in Euros (€)', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'dh', title: 'Price in Dirhams (DH)', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'gbp', title: 'Price in Pounds (£)', type: 'string', validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: {
        title: 'roomType.title',
        subtitle: 'euro'
    },
    prepare({title, subtitle}) {
        return {
            title: title,
            subtitle: `€${subtitle}`
        }
    }
  }
})
