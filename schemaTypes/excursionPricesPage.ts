// /schemas/excursionPricesPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'excursionPricesPage',
  title: 'Excursion Prices Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Excursion Prices Page',
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
        name: 'pageTitle',
        title: 'Main Title',
        type: 'string',
        initialValue: 'Excursion Prices',
        fieldset: 'introduction',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'pricingBasis',
        title: 'Pricing Basis Text',
        type: 'string',
        fieldset: 'introduction',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'groupDiscountNote',
        title: 'Group Discount Note',
        type: 'string',
        fieldset: 'introduction',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'singlePersonPolicy',
        title: 'Single Person Policy Note',
        type: 'string',
        fieldset: 'introduction',
        validation: (Rule) => Rule.required(),
    }),

    // --- Pricing Table ---
    defineField({
        name: 'excursions',
        title: 'Excursion Prices',
        description: 'Add each excursion and its prices to the table.',
        type: 'array',
        of: [{type: 'excursionPrice'}],
    })
  ],
  fieldsets: [
    { name: 'header', title: 'Header Section' },
    { name: 'introduction', title: 'Introduction Section' },
  ],
})
