const path = require("path")

const getProjectFromPath = (filePath) => {
  if (filePath.startsWith("apps/tms/")) return "tms"
  if (filePath.startsWith("apps/partner/")) return "partner"
  if (filePath.startsWith("apps/pnt/")) return "pnt"
  return null // nếu cần ignore file ngoài app
}

module.exports = (filenames) => {
  const projectFilesMap = {}

  filenames.forEach((file) => {
    const project = getProjectFromPath(file)
    if (!project) return // Bỏ qua file không thuộc app

    if (!projectFilesMap[project]) {
      projectFilesMap[project] = []
    }

    projectFilesMap[project].push(file)
  })

  return Object.entries(projectFilesMap).map(([project, files]) => {
    const relativeFiles = files.map((f) => path.relative(process.cwd(), f)).join(" ")
    return `eslint --fix ${relativeFiles} --config apps/${project}/eslint.config.js`
  })
}
