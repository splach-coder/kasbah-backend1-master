// /schemas/restaurantAndBarPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurantAndBarPage',
  title: 'Restaurant & Bar Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Restaurant & Bar Overview',
      readOnly: false,
    }),
    defineField({
      name: 'headerBackgroundImage',
      title: 'Header Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'overviewDescription',
        title: 'Overview Introduction Points',
        description: 'Add the three main introductory points for the top of the page.',
        type: 'array',
        of: [{type: 'string'}],
        validation: (Rule) => Rule.required().length(3),
    }),
    defineField({
      name: 'featuredDiningTypes',
      title: 'Featured Dining Types',
      description: 'Select the dining types you want to display as cards on this overview page.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'diningType'}}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
