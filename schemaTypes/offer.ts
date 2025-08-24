import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offer',
  title: 'Offer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'icon',
        title: 'Icon',
        description: 'Select an icon that best represents this offer.',
        type: 'string',
        options: {
            list: [
                { title: 'Cancellation (Shield)', value: 'ShieldCheck' },
                { title: 'Transfers (Plane)', value: 'Plane' },
                { title: 'Seasonal (Calendar)', value: 'CalendarDays' },
                { title: 'Children (Baby)', value: 'Baby' },
                { title: 'Pricing (Percent)', value: 'BadgePercent' },
                { title: 'Free Gift (Gift)', value: 'Gift' },
                { title: 'Honeymoon (Heart)', value: 'Heart' },
                { title: 'Location (Map)', value: 'Map' },
                { title: 'Multi-Centre (Route)', value: 'Route' },
            ],
            layout: 'dropdown'
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'link',
        title: 'Optional Link',
        type: 'object',
        fields: [
            { name: 'text', title: 'Link Text', type: 'string' },
            { name: 'href', title: 'URL (Link)', type: 'url', validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              }) 
            }
        ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})