import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Site Settings',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      description: 'Logo displayed in the footer',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        }
      ]
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          validation: Rule => Rule.required()
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: Rule => Rule.required().email()
        }
      ]
    })
  ]
})