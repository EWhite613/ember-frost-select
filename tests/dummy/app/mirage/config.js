import config from '../config/environment'

export default function () {
  if (config && !Ember.isEmpty(config.mirageNamespace)) {
    this.namespace = config.mirageNamespace
  }
  this.get('/nodes', function (db) {
    return {
      data: db.nodes
    }
  })
  this.passthrough()
}
