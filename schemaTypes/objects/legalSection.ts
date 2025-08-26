// /schemas/objects/legalSection.ts

import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'legalSection',
    title: 'Legal Section',
    type: 'object',
    fields: [
        defineField({ 
            name: 'title', 
            title: 'Section Title', 
            type: 'string', 
            validation: (Rule) => Rule.required() 
        }),
        defineField({ 
            name: 'content', 
            title: 'Content', 
            type: 'text', 
            rows: 4,
            validation: (Rule) => Rule.required() 
        })
    ],
    preview: {
        select: {
            title: 'title'
        }
    }
})
