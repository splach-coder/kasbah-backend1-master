// /sanity/schemas/activitySection.ts
export default {
    name: 'activitySection',
    title: 'Activity Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Activity Title',
        type: 'string',
      },
      {
        name: 'img',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Excursions', value: 'Excursions' },
            { title: 'Events', value: 'Events' },
            { title: 'Restaurants & Bar', value: 'Restaurants & Bar' },
            { title: 'Offers', value: 'OFFERS' },
            { title: 'Amenities', value: 'AMENITIES' },
          ],
        },
      },
    ],
  };