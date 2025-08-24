// sanity/schemas/roomSection.js
import type { Rule } from '@sanity/types';

export default {
    name: 'roomSection',
    title: 'Rooms & Suites',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'name',
        title: 'Room Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'details',
        title: 'Details (e.g. 2 guests)',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'size',
        title: 'Room Size (e.g. 50 sqm)',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'mainImg',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'bathImg',
        title: 'Bathroom Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule: Rule) => Rule.required()
      }
    ]
  }
  