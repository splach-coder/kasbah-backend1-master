import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offersPage',
  title: 'Offers Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Offers',
      readOnly: true,
    }),
    
    // --- Header Section ---
    defineField({
      name: 'headerBackgroundImage',
      title: 'Header Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // --- Offers Grid ---
    defineField({
        name: 'offers',
        title: 'Offers to Display',
        description: 'Select the offers you want to feature on this page.',
        type: 'array',
        of: [{type: 'reference', to: {type: 'offer'}}],
        validation: (Rule) => Rule.required().min(1),
    })
  ],
})
