import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {markdownSchema} from 'sanity-plugin-markdown'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Cassowary World',

  projectId: 'm6hc4vjm',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), markdownSchema(), media()],

  schema: {
    types: schemaTypes,
  },
})
