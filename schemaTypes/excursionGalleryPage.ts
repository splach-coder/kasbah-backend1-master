// /schemas/excursionGalleryPage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'excursionGalleryPage',
  title: 'Excursion Gallery Page',
  type: 'document',
  fields: [
    // --- Internal Title ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Excursion Gallery Page',
      readOnly: false,
    }),
    
    // --- Header Section ---
    defineField({
      name: 'headerBackgroundImage',
      title: 'Header Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // --- Introduction Section ---
    defineField({
        name: 'galleryTitle',
        title: 'Gallery Title',
        type: 'string',
        initialValue: 'Moments of Discovery',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'galleryIntro',
        title: 'Gallery Introduction',
        type: 'text',
        rows: 3,
        validation: (Rule) => Rule.required(),
    }),

    // --- Gallery Grid ---
    defineField({
        name: 'images',
        title: 'Gallery Images',
        description: 'Add the images for the asymmetric grid.',
        type: 'array',
        of: [{type: 'galleryImage'}],
        validation: (Rule) => Rule.required().min(1),
    })
  ],
})
