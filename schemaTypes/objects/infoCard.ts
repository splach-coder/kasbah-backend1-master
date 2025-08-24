// /schemas/objects/infoCard.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infoCard',
  title: 'Info Card',
  type: 'object',
  fields: [
    defineField({
        name: 'icon',
        title: 'Icon',
        type: 'string',
        options: {
            list: [
                { title: 'Bed', value: 'Bed' },
                { title: 'Users (Families)', value: 'Users' },
                { title: 'Utensils (Meals)', value: 'Utensils' },
                { title: 'Plane (Transfers)', value: 'Plane' },
                { title: 'File (Policies)', value: 'FileText' },
            ],
            layout: 'dropdown'
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'title',
        title: 'Card Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'content',
        title: 'Content',
        type: 'array', // Using Portable Text for rich content (bold, links)
        of: [{
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
            marks: {
                decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
                annotations: [
                    {
                      name: 'link',
                      type: 'object',
                      title: 'URL',
                      fields: [{ name: 'href', type: 'url', title: 'URL' }]
                    }
                ]
            }
        }]
    })
  ],
   preview: {
    select: {
        title: 'title',
    }
  }
})
