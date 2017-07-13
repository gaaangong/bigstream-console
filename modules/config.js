const Store = require('electron-store');
const store = new Store();

if (!store.get('api')) {
  store.set({
    'api.job_api': 'http://localhost:19980/v1/jobs',
    'api.storages_api': 'http://localhost:19080/v0.1/storage',
    'api.storages_obj_api': 'http://localhost:19080/v0.1/object'
  });
}