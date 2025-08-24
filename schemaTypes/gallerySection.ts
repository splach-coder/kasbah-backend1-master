// /schemas/gallerySection.ts
import type { Rule } from '@sanity/types';

export default {
    name: 'gallerySection',
    type: 'document',
    title: 'Gallery Section',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Section Title',
      },
      {
        name: 'images',
        type: 'array',
        title: 'Gallery Images (max 8)',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'image', type: 'image', title: 'Image' },
              { name: 'alt', type: 'string', title: 'Alt text' },
            ],
          },
        ],
        validation: (Rule: Rule) => Rule.max(8),
      },
    ],
  };
  