import {defineField, defineType} from 'sanity'
import {LemonIcon} from '@sanity/icons'

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  icon: LemonIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (e.g., 75 DH)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
    },
  },
})
