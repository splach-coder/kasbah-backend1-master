// /schemas/contactPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact Page',
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

    // --- Top-Left: Get In Touch Section ---
    defineField({
        name: 'address',
        title: 'Address',
        type: 'string',
        fieldset: 'getInTouch',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'phone1',
        title: 'Phone Number 1',
        type: 'string',
        fieldset: 'getInTouch',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'phone2',
        title: 'Phone Number 2',
        type: 'string',
        fieldset: 'getInTouch',
    }),
    defineField({
        name: 'email',
        title: 'Email Address',
        type: 'string',
        fieldset: 'getInTouch',
        validation: (Rule) => Rule.email().required(),
    }),

    // --- Top-Right: Ready to Book Section ---
    defineField({
        name: 'bookingTitle',
        title: 'Booking Section Title',
        type: 'string',
        fieldset: 'booking',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'bookingText',
        title: 'Booking Section Text',
        type: 'text',
        rows: 3,
        fieldset: 'booking',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'bookingButtonText',
        title: 'Booking Button Text',
        type: 'string',
        fieldset: 'booking',
        validation: (Rule) => Rule.required(),
    }),
     defineField({
        name: 'bookingButtonLink',
        title: 'Booking Button Link',
        type: 'url',
        fieldset: 'booking',
        validation: (Rule) => Rule.required(),
    }),

    // --- Bottom-Left: Form Section ---
    defineField({
        name: 'formTitle',
        title: 'Form Title',
        type: 'string',
        fieldset: 'form',
        validation: (Rule) => Rule.required(),
    }),
  ],
  // This helps organize the fields in the Sanity Studio
  fieldsets: [
    { name: 'header', title: 'Header Section' },
    { name: 'getInTouch', title: 'Top-Left: Get In Touch' },
    { name: 'booking', title: 'Top-Right: Ready to Book' },
    { name: 'form', title: 'Bottom-Left: Contact Form' },
  ],
})
