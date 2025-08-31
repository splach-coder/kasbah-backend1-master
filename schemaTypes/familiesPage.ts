// /schemas/familiesPage.ts
import {defineField, defineType} from 'sanity'
import roomConfiguration from './objects/roomConfiguration' 

const familiesPage = defineType({
  name: 'familiesPage',
  title: 'Families',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Families',
      readOnly: false,
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
        name: 'overviewDescription',
        title: 'Overview Description',
        type: 'string',
        fieldset: 'overview',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'childPolicy',
        title: 'Child Policy',
        type: 'text',
        rows: 2,
        fieldset: 'overview',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'roomCombinations',
        title: 'Room Combinations Info',
        type: 'text',
        rows: 2,
        fieldset: 'overview',
        validation: (Rule) => Rule.required(),
    }),



    // --- Family Experience Section ---
    defineField({
        name: 'experiencePhilosophy',
        title: 'Experience Philosophy',
        type: 'text',
        rows: 4,
        fieldset: 'experience',
    }),
    defineField({
        name: 'experienceHospitality',
        title: 'Experience Hospitality',
        type: 'text',
        rows: 2,
        fieldset: 'experience',
    }),

    // --- Activities Section ---
     defineField({
        name: 'familyActivities',
        title: 'Off-site Family Activities',
        type: 'array',
        of: [{type: 'string'}],
        options: { layout: 'tags' },
        fieldset: 'activities',
    }),
    defineField({
        name: 'onSiteActivities',
        title: 'On-site Activities',
        type: 'array',
        of: [{type: 'string'}],
        options: { layout: 'tags' },
        fieldset: 'activities',
    }),
  ],
  // This helps organize the fields in the Sanity Studio
  fieldsets: [
    { name: 'header', title: 'Header Section' },
    { name: 'overview', title: 'Overview Section' },
    { name: 'configurations', title: 'Room Configurations Table' },
    { name: 'experience', title: 'Family Experience Section' },
    { name: 'activities', title: 'Activities Lists' },
  ],
})


export { roomConfiguration, familiesPage }
