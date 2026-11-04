import type { RouteId } from '~/data/routes'
import { routes } from '~/data/routes'

export const useRouteSelection = () => {
  const selectedRouteId = useState<RouteId>('selected-route', () => routes[0]!.id)

  const selectRoute = (id: RouteId) => {
    selectedRouteId.value = id
  }

  return { selectedRouteId, selectRoute }
}
