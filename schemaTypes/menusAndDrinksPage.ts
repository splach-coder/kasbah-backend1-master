// /schemas/menusAndDrinksPage.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menusAndDrinksPage',
  title: 'Menus & Drinks Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Menus & Drinks',
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

    // --- Overview Section ---
    defineField({
        name: 'dinnerInfo',
        title: 'Dinner Information',
        type: 'text',
        rows: 3,
        fieldset: 'overview',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'dinnerPrice',
        title: 'Dinner Price',
        type: 'string',
        description: 'e.g., "330 dirhams (€31.50, £26.20)"',
        fieldset: 'overview',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'lunchInfo',
        title: 'Lunch Information',
        type: 'text',
        rows: 2,
        fieldset: 'overview',
        validation: (Rule) => Rule.required(),
    }),

    // --- Sample Menu Section ---
    defineField({
        name: 'sampleMenuTitle',
        title: 'Sample Menu Title',
        type: 'string',
        initialValue: 'Sample 3 Course Dinner',
        fieldset: 'sampleMenu',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'sampleMenuStarters',
        title: 'Sample Menu: Starters',
        type: 'array',
        of: [{type: 'string'}],
        fieldset: 'sampleMenu',
        options: { layout: 'tags' }
    }),
    defineField({
        name: 'sampleMenuMains',
        title: 'Sample Menu: Main Courses',
        type: 'array',
        of: [{type: 'string'}],
        fieldset: 'sampleMenu',
        options: { layout: 'tags' }
    }),
    defineField({
        name: 'sampleMenuDesserts',
        title: 'Sample Menu: Desserts',
        type: 'array',
        of: [{type: 'string'}],
        fieldset: 'sampleMenu',
        options: { layout: 'tags' }
    }),

    // --- Drinks Menu Section ---
    defineField({
        name: 'softDrinks',
        title: 'Soft Drinks & Coffee',
        type: 'array',
        of: [{type: 'menuItem'}], // Reusing the menuItem object type
        fieldset: 'drinksMenu',
    }),
    defineField({
        name: 'alcoholicDrinksIntro',
        title: 'Alcoholic Drinks Introduction',
        type: 'string',
        initialValue: 'Kasbah Angour is licensed to sell alcohol.',
        fieldset: 'drinksMenu',
    }),
    defineField({
        name: 'alcoholicDrinks',
        title: 'Alcoholic Drinks',
        type: 'array',
        of: [{type: 'menuItem'}], // Reusing the menuItem object type
        fieldset: 'drinksMenu',
    }),
    defineField({
        name: 'disclaimer',
        title: 'Pricing Disclaimer',
        type: 'text',
        rows: 2,
        fieldset: 'drinksMenu',
    }),
  ],
  // This helps organize the fields in the Sanity Studio
  fieldsets: [
    { name: 'header', title: 'Header Section' },
    { name: 'overview', title: 'Overview Text' },
    { name: 'sampleMenu', title: 'Sample Dinner Menu' },
    { name: 'drinksMenu', title: 'Drinks Menu' },
  ],
})
