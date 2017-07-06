const Store = require('electron-store');
const store = new Store();

if (!store.get('api')) {
  store.set({
    'api.job_api': 'http://10.226.63.52:19980/v1/jobs',
    'api.storages_api': 'http://bigmaster.igridproject.info:19080/v0.1/storage',
    'api.storages_obj_api': 'http://bigmaster.igridproject.info:19080/v0.1/object'
  });
}