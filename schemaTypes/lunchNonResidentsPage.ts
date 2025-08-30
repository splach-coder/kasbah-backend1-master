import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lunchNonResidentsPage',
  title: 'Lunch for Non-Residents Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Lunch for Non-Residents Page',
      readOnly: true,
    }),
    
    // Header & Introduction
    defineField({
      name: 'headerBackgroundImage',
      title: 'Header Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'introduction',
        title: 'Introduction Text',
        type: 'text',
        rows: 4,
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'sellingPoints',
        title: 'Selling Points',
        type: 'array',
        of: [{type: 'string'}],
        validation: (Rule) => Rule.required().length(3),
    }),

    // Packages
    defineField({
        name: 'packages',
        title: 'Special Packages',
        type: 'array',
        of: [{
            type: 'object',
            name: 'package',
            fields: [
                defineField({ name: 'title', title: 'Package Title', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
                defineField({ name: 'price', title: 'Price', type: 'string', validation: (Rule) => Rule.required() }),
            ]
        }],
        validation: (Rule) => Rule.required(),
    }),

    // Menu Sections
    defineField({
        name: 'lightDishes',
        title: 'Lunch Menu: Light Dishes',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    }),
    defineField({
        name: 'salads',
        title: 'Lunch Menu: Salads',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    }),
    defineField({
        name: 'cookedDishes',
        title: 'Lunch Menu: Cooked Dishes',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    }),
    defineField({
        name: 'desserts',
        title: 'Lunch Menu: Desserts',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    }),
  ],
})
