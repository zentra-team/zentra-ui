import { codeToHtml } from "shiki"
import {
  checkAvailableTest,
  getContent,
  getContentFile,
  matchJsdoc,
  parseHookJsdoc
} from "../../src/utils"

interface HookPageParams {
  params: {
    example: string
    description: string
    category: string
    lastModified: number
    usage: string
    apiParameters: any[]
    browserapi?: {
      name: string
      description: string
    }
    id: string
    isTest: boolean
    name: string
  }
}

export default {
  async paths() {
    const components = await getContent("components")

    const params = await Promise.all(
      components.map(async (comp) => {
        const { content, stats } = await getContentFile("components", comp.name)
        const jsdocMatch = matchJsdoc(content)

        if (!jsdocMatch) {
          console.error(`No jsdoc comment found for ${comp}`)
          return null
        }

        const jsdoc = parseHookJsdoc(jsdocMatch)

        if (!jsdoc.description || !jsdoc.usages) {
          console.error(`No content found for ${comp}`)
          return null
        }

        const usages = jsdoc.usages.reduce((acc, usage, index) => {
          if (index !== jsdoc.usages.length - 1) {
            acc += `${usage.description}\n// or\n`
          } else {
            acc += usage.description
          }
          return acc
        }, "")

        const usage = await codeToHtml(usages, {
          lang: "tsx",
          themes: {
            light: "github-light",
            dark: "github-dark"
          },
          defaultColor: false
        })

        const example = await codeToHtml(`import { ${comp.name} } from '@bounce-ui';`, {
          lang: "tsx",
          themes: {
            light: "github-light",
            dark: "github-dark"
          },
          defaultColor: false
        })

        const isTest = await checkAvailableTest(comp)

        return {
          params: {
            id: comp.name,
            name: comp.name,
            type: comp.type,
            description: jsdoc.description.description,
            category: jsdoc.category?.name,
            lastModified: stats.mtime.getTime(),
            isTest,
            usage,
            example,
            apiParameters: jsdoc.apiParameters ?? []
          }
        }
      })
    )

    const pages = params.filter(Boolean) as unknown as HookPageParams[]
    const testCoverage = pages.reduce((acc, page) => acc + Number(page.params.isTest), 0)

    console.log("\nElements injection report\n")
    console.log(`\x1B[32mInjected: ${pages.length}\x1B[0m`)
    console.log(
      `\x1B[35mTest coverage: ${Math.round(
        (testCoverage / pages.length) * 100
      )}% (${testCoverage})\x1B[0m`
    )
    console.log(`\x1B[33mSkipped: ${components.length - pages.length}\x1B[0m`)
    console.log(`\nTotal: ${components.length} elements`)

    return pages
  }
}
