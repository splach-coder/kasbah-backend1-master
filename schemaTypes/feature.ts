    // /schemas/feature.ts

    import {defineField, defineType} from 'sanity'

    export default defineType({
      name: 'feature',
      title: 'Homepage Feature',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
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
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'imagePosition',
          title: 'Image Position',
          type: 'string',
          options: {
            list: [
              { title: 'Left', value: 'left' },
              { title: 'Right', value: 'right' },
            ],
            layout: 'radio',
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'link',
          title: 'Link',
          description: 'The relative path for the link, e.g., "/rooms-and-rates"',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      preview: {
        select: {
          title: 'title',
          media: 'image',
        },
      },
    })
    