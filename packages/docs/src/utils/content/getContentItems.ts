import { parseHookJsdoc } from "../parseHookJsdoc"
import { getContent } from "./getContent"
import { getContentFile } from "./getContentFile"

interface ContentItem {
  category: string
  description: string
  text: string
  link: string
}

export const getContentItems = async (): Promise<ContentItem[]> => {
  const components = await getContent("components")
  const hooks = await getContent("functions")

  const content = [...components, ...hooks]

  const sidebar = await Promise.all(
    content.map(async (item) => {
      const { content } = await getContentFile(item.type, item.name)

      const jsdocCommentRegex = /\/\*\*\s*\n([^\\*]|(\*(?!\/)))*\*\//
      const match = content.match(jsdocCommentRegex)

      if (!match) {
        console.error(`No jsdoc comment found for ${item}`)
        return null
      }

      const jsdoc = parseHookJsdoc(match[0].trim())

      if (!jsdoc.description || !jsdoc.usages) {
        console.error(`No content found for ${item}`)
        return null
      }

      return {
        text: item.name,
        description: jsdoc.description.description,
        category: jsdoc.category?.name,
        link: `/${item.type}/${item.name}`
      }
    })
  )

  return sidebar.filter(Boolean) as ContentItem[]
}
