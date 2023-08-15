// npx @rtk-query/codegen-openapi src/state/api/config-TFL.ts
import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './TFL-API-Spec.json',
  apiFile: './emptyApi-TFL.ts',
  apiImport: 'TFLApi',
  exportName: 'api',
  hooks: true,
  tag: true,
  outputFiles: {
    './api-TFL.ts': {
      filterEndpoints: [/.*/],
    },

  },
}

export default config