import fs from "node:fs"

export const getContentFile = async (type: "components" | "functions", name: string) => {
  try {
    const ext = type === "components" ? "tsx" : "ts"
    const filePath = `../../packages/core/src/${type}/${name}/${name}.${ext}`

    const stats = await fs.promises.stat(filePath)
    const content = await fs.promises.readFile(filePath, "utf-8")

    return { stats, content }
  } catch (error) {
    console.error(`Error reading file: ${error}`)
    throw error
  }
}
