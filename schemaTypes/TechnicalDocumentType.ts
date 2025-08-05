import {defineField, defineType} from 'sanity'

export const technicalDocumentType = defineType({
  name: 'technicalDocument',
  title: 'Technical Document',
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
      name: 'image',
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
