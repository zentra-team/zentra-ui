import fs from "node:fs"

export const checkAvailableTest = async (element: {
  type: "components" | "functions"
  name: string
}) => {
  const files = await fs.promises.readdir(`../../packages/core/src/${element.type}/${element.name}`)

  return files.some((file) => file.includes(`${element.name}.test`))
}
