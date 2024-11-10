import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Cliff_Portfolio',

  projectId: 'j5p8xmf8',
  dataset: 'cliff',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
