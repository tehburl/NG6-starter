class ForkService {
    constructor($http, $q,  $rootScope) {
    this.$http = $http;
    this.$q = $q;
    this.$rootScope = $rootScope;
    }
    
    loadData() {
     return "Data from loadData() in the ForkService!";
    }
}

ForkService.$inject = ["$http", "$q", "$rootScope"];
export default ForkService;