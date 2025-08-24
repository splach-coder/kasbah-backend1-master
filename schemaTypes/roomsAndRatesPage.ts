import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'roomsAndRatesPage',
  title: 'Rooms & Rates Page',
  type: 'document',
  fields: [
    // This is for internal organization in Sanity
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Rooms & Rates Page',
      readOnly: true,
    }),
    
    // --- Header Section ---
    defineField({
      name: 'headerBackgroundImage',
      title: 'Header Background Image',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'header',
      validation: (Rule) => Rule.required(),
    }),

    // --- Introduction Section ---
    defineField({
      name: 'roomTypes',
      title: 'Room Types to Display',
      description: 'Select the room types you want to feature on this page.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'roomType'}}],
      validation: (Rule) => Rule.required().min(1),
    }),

    // --- Rates Section ---
    defineField({
        name: 'ratesSectionImage',
        title: 'Rates Section Image',
        type: 'image',
        options: { hotspot: true },
        fieldset: 'rates',
        validation: (Rule) => Rule.required(),
    }),
  ],
  fieldsets: [
    { name: 'header', title: 'Header Section', options: { collapsible: true, collapsed: false } },
    { name: 'rates', title: 'Rates Section', options: { collapsible: true, collapsed: false } },
  ]
})