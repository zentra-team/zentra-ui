import { transformerTwoslash } from "@shikijs/vitepress-twoslash"
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath } from "node:url"
import type { DefaultTheme, MarkdownOptions } from "vitepress"
import { defineConfig } from "vitepress"
import { getContentItems } from "../../src/utils"

export default async () => {
  const contentItems = await getContentItems()
  const sidebarContentItems = contentItems.reduce<DefaultTheme.SidebarItem[]>(
    (categoryItems, hookItem) => {
      const category = categoryItems.find((group) => group.text === hookItem.category)

      if (!category) {
        categoryItems.push({ text: hookItem.category, items: [hookItem] })
      } else {
        category.items!.push(hookItem)
      }

      return categoryItems
    },
    []
  )
  const homePageFeatures = contentItems.map((item) => ({
    title: item.text,
    details: item.description,
    link: item.link
  }))

  return defineConfig({
    base: "/zentra-ui/",
    appearance: true,
    title: "Zentra UI",
    description: "🚀 the largest and most useful hook library",
    markdown: {
      codeTransformers: [transformerTwoslash()],
      languages: ["js", "jsx", "ts", "tsx"]
    } as unknown as MarkdownOptions,
    vite: {
      // css: {
      //   preprocessorOptions: {
      //     css: {
      //       additionalData: '@import "./theme/global.css";'
      //     }
      //   }
      // },
      plugins: [tailwindcss() as any],
      resolve: {
        alias: {
          "@bounceui/core": fileURLToPath(new URL("../../../core/src", import.meta.url)),
          "@bounceui/docs": fileURLToPath(new URL("../../src", import.meta.url)),
          "@": fileURLToPath(new URL("../../../core/src", import.meta.url))
        }
      },
      optimizeDeps: {
        include: ["tailwindcss"]
      }
    },
    transformPageData: (pageData) => {
      // if (pageData.relativePath === "index.md") {
      //   pageData.frontmatter.features = homePageFeatures
      // }

      if (pageData.relativePath.includes("functions")) {
        pageData.title = pageData.params?.name
        return
      }
      if (pageData.relativePath.includes("components")) {
        pageData.title = pageData.params?.name
        return
      }
    },
    head: [
      [
        "link",
        {
          rel: "icon",
          href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        }
      ]
    ],
    locales: {
      root: {
        label: "English",
        lang: "en",
        themeConfig: {
          editLink: {
            pattern: ({ filePath, params }) => {
              if (filePath.includes("hooks") && params?.name) {
                return `https://github.com/trackly-app/ui/blob/main/src/hooks/${params.name}/${params.name}.ts`
              } else {
                return `https://github.com/trackly-app/ui/blob/main/docs/${filePath}`
              }
            },
            text: "Suggest changes to this page"
          },
          nav: [
            { text: "Home", link: "/" },
            { text: "Components", link: "/components" },
            { text: "Get Started", link: "/getting-started" }
          ],
          sidebar: [
            {
              text: "Guide",
              items: [
                { text: "Getting Started", link: "/getting-started" },
                { text: "Installation", link: "/installation" },
                { text: "CLI", link: "/cli" }
              ]
            },
            ...sidebarContentItems
          ]
        }
      }
      // ru: {
      //   label: 'Русский',
      //   lang: 'ru',
      //   themeConfig: {
      //     nav: [
      //       { text: 'Главная', link: '/ru' },
      //       {
      //         text: 'Функции',
      //         items: [{ text: 'Хуки', link: '/ru/functions/hooks' }]
      //       }
      //     ]
      //   }
      // }
    },
    themeConfig: {
      // search: {
      //   provider: "algolia",
      //   options: {
      //     appId: "62LROXAB1F",
      //     apiKey: "c1ff07348583383446ca32068eb1300f",
      //     indexName: "siberiacancodeio"
      //   }
      // },
      socialLinks: [
        { icon: "github", link: "https://github.com/siberiacancode/reactuse" },
        { icon: "npm", link: "https://www.npmjs.com/package/@siberiacancode/reactuse" },
        { icon: "youtube", link: "https://www.youtube.com/@siberiacancode" }
      ]
    }
  })
}
