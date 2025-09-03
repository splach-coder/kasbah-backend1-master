import {defineField, defineType} from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

export default defineType({
  name: 'aboutSection',
  title: 'About Section (Homepage)',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
        name: 'title',
        title: 'Internal Title',
        type: 'string',
        initialValue: 'Homepage About Section Content',
        readOnly: true,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description: 'The main introductory text for the about section. You can use Shift+Enter to create line breaks similar to the original design.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
