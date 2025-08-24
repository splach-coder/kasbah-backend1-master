import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'object',
    fields: [
        defineField({ name: 'name', title: 'Item Name', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'price', title: 'Price (e.g., 75 DH)', type: 'string', validation: (Rule) => Rule.required() })
    ]
})