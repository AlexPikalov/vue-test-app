import { buildRoutes } from '../shared/router-helpers'

import Statistics from './statistics/Statistics.vue'
import Cluster from './cluster/Cluster.vue'
import clusterRoutes from './cluster/cluster.routes'

export default [
  { path: '/', component: Statistics },
  { 
    path: 'cluster',
    component: Cluster,
    children: clusterRoutes('cluster')
  }
];