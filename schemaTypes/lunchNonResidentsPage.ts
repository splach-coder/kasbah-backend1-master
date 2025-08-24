// /schemas/lunchNonResidentsPage.ts

import {defineField, defineType} from 'sanity'
import menuItem from './objects/menuItem' 


const lunchNonResidentsPage = defineType({
  name: 'lunchNonResidentsPage',
  title: 'Lunch for Non-Residents',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Lunch for Non-Residents',
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
        name: 'introduction',
        title: 'Introduction Text',
        type: 'text',
        rows: 4,
        fieldset: 'introduction',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'sellingPoints',
        title: 'Selling Points',
        description: 'The three key selling points with icons.',
        type: 'array',
        of: [{type: 'string'}],
        fieldset: 'introduction',
        validation: (Rule) => Rule.required().length(3),
    }),

    // --- Packages Section ---
    defineField({
        name: 'packages',
        title: 'Special Packages',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Package Title', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
                defineField({ name: 'price', title: 'Price', type: 'string', validation: (Rule) => Rule.required() }),
            ],
            preview: { select: { title: 'title', subtitle: 'price' } }
        }],
        fieldset: 'packages',
        validation: (Rule) => Rule.required().length(2),
    }),

    // --- Menu Section ---
    defineField({
        name: 'lunchMenuStarters',
        title: 'Lunch Menu: Starters',
        type: 'array',
        of: [{type: 'menuItem'}],
        fieldset: 'menu',
    }),
    defineField({
        name: 'lunchMenuMains',
        title: 'Lunch Menu: Main Courses',
        type: 'array',
        of: [{type: 'menuItem'}],
        fieldset: 'menu',
    }),
    defineField({
        name: 'lunchMenuDesserts',
        title: 'Lunch Menu: Desserts',
        type: 'array',
        of: [{type: 'menuItem'}],
        fieldset: 'menu',
    }),
  ],
  // This helps organize the fields in the Sanity Studio
  fieldsets: [
    { name: 'header', title: 'Header Section' },
    { name: 'introduction', title: 'Introduction' },
    { name: 'packages', title: 'Packages' },
    { name: 'menu', title: 'Lunch Menu' },
  ],
})

export { menuItem, lunchNonResidentsPage } // Exporting the menuItem schema for use in this document