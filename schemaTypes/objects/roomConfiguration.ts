import {defineField, defineType} from 'sanity'

// A reusable object type for the room configuration table
export default defineType({
    name: 'roomConfiguration',
    title: 'Room Configuration',
    type: 'object',
    fields: [
        defineField({ name: 'room_type', title: 'Room Type', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'configuration', title: 'Bed Configuration', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
        defineField({ name: 'price', title: 'Price (e.g., 211.20 €)', type: 'string', validation: (Rule) => Rule.required() })
    ]
})