// /schemas/legalPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'legalPage',
  title: 'Website Use & Privacy Policy',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Legal Page',
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

    // --- Terms of Use Content ---
    defineField({
        name: 'termsSections',
        title: 'Terms of Use Sections',
        description: 'Add each section of the Terms of Use document.',
        type: 'array',
        of: [{type: 'legalSection'}],
        fieldset: 'content',
        validation: (Rule) => Rule.required().min(1),
    }),

    // --- Privacy Policy Content ---
    defineField({
        name: 'privacyPolicySections',
        title: 'Privacy Policy Sections',
        description: 'Add each section of the Privacy Policy document.',
        type: 'array',
        of: [{type: 'legalSection'}],
        fieldset: 'content',
        validation: (Rule) => Rule.required().min(1),
    }),
  ],
  // This helps organize the fields in the Sanity Studio
  fieldsets: [
    { name: 'header', title: 'Header Section' },
    { name: 'content', title: 'Page Content' },
  ],
})
