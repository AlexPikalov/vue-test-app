import ViewCluster from './ViewCluster.vue'
import NewCluster from './NewCluster.vue'

export default function (prefix = 'cluster') { return [
  {
    path: ':id/view',
    component: ViewCluster,
    props: true,
    name: `${prefix}.view`
  },
  {
    path: 'new',
    component: NewCluster,
    name: `${prefix}.new`
  }
]}