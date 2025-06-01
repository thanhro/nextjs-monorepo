const getProjectFromPath = (filePath) => {
  if (filePath.startsWith("apps/tms/")) return "tms"
  if (filePath.startsWith("apps/partner/")) return "partner"
  if (filePath.startsWith("apps/pnt/")) return "pnt"
  return null
}

module.exports = (filenames) => {
  const affectedProjects = new Set()

  filenames.forEach((file) => {
    const project = getProjectFromPath(file)
    if (project) {
      affectedProjects.add(project)
    }
  })

  return [...affectedProjects].map((project) => `nx lint ${project} --fix`)
}
