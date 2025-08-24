// /schemas/ratesPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ratesPage',
  title: 'Room Rates Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Room Rates Page',
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

    // --- Standard Season ---
    defineField({
        name: 'standardSeasonTitle',
        title: 'Standard Season Title',
        type: 'string',
        initialValue: 'Standard Season 2025',
        fieldset: 'standardSeason',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'standardSeasonDates',
        title: 'Standard Season Dates',
        type: 'string',
        fieldset: 'standardSeason',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'standardSeasonRates',
        title: 'Standard Season Rates',
        type: 'array',
        of: [{type: 'rate'}],
        fieldset: 'standardSeason',
    }),

    // --- High Season ---
    defineField({
        name: 'highSeasonTitle',
        title: 'High Season Title',
        type: 'string',
        initialValue: 'High Season 2025',
        fieldset: 'highSeason',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'highSeasonDates',
        title: 'High Season Dates',
        type: 'string',
        fieldset: 'highSeason',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'highSeasonRates',
        title: 'High Season Rates',
        type: 'array',
        of: [{type: 'rate'}],
        fieldset: 'highSeason',
    }),

    // --- Additional Info Cards ---
    defineField({
        name: 'additionalInfoCards',
        title: 'Additional Info Cards',
        description: 'The cards that appear on the right-hand column.',
        type: 'array',
        of: [{type: 'infoCard'}]
    })
  ],
  fieldsets: [
    { name: 'header', title: 'Header Section' },
    { name: 'standardSeason', title: 'Standard Season Table' },
    { name: 'highSeason', title: 'High Season Table' },
  ],
})
