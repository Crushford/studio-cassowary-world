import {defineField, defineType} from 'sanity'

export const speechType = defineType({
  name: 'speech',
  title: 'Speech',
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
    }),
    defineField({
      name: 'markdown',
      title: 'Markdown Body',
      type: 'markdown',
      validation: (rule) => rule.required(),
    }),
  ],
})
