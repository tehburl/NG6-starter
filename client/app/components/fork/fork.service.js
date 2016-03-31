import BaseService from '../../services/base.service';
class ForkService extends BaseService {
    constructor($http, $q,  $rootScope) {
    super();
    this.$http = $http;
    this.$q = $q;
    this.$rootScope = $rootScope;
    }

    loadData() {
     // alerts baseApiAddress
     // Example of inheritance
     this.alertBaseApiAddress();
     return "Data from loadData() in the ForkService!";
    }
}

ForkService.$inject = ["$http", "$q", "$rootScope"];
export default ForkService;
