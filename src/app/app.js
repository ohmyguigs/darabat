import angular from 'angular';
import {
  getAllAlbums,
  checkAPI,
} from '../services/fetcher'

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($scope) {
    checkAPI()
    this.$scope = $scope
    this.url = 'https://github.com/preboot/angular-webpack';
    this.allAlbums = [];
    this.hydrateApp = () => {
      console.log('called hydrate app')
      console.log('getAllAlbums is defined as:', getAllAlbums)
      getAllAlbums()
        .then(data => data.forEach(a => this.allAlbums.push(a)))
    }
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;