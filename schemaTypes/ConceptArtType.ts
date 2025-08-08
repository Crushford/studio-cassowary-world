import {defineField, defineType} from 'sanity'

export const conceptArtType = defineType({
  name: 'conceptArt',
  title: 'Concept Art',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'images',
      title: 'Concept Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption or Commentary',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
              options: {
                layout: 'tags',
              },
            }),
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description or Notes',
      type: 'markdown',
    }),
  ],
})
