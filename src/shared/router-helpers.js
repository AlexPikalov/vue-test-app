export function buildRoutes(prefix, routes = []) {
  return routes.map(route => {
    let decorated = Object.assign({}, route, { path: `/${prefix}/${route.path}` })

    if (decorated.name) {
      decorated.name = `${prefix}.${decorated.name}`
    }

    return decorated
  })
}