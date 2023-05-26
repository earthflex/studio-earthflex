import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import { colorInput } from '@sanity/color-input'
import { structure } from './layouts/desk-structure'

type Title = string;
type ProjectId = string;
type Dataset = string;

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_TITLLE as Title,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID as ProjectId,
  dataset: process.env.SANITY_STUDIO_DATASET as Dataset,

  plugins: [
    deskTool({ structure }),
    visionTool(), ...(isDev ? devOnlyPlugins : []),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})

