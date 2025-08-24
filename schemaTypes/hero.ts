export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Hero Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Hero Image',
        type: 'image',
        options: { hotspot: true },
      },
    ],
  };
  