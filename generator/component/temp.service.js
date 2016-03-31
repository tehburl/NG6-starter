class <%= upCaseName %>Service {
    constructor($http, $q,  $rootScope) {
    this.$http = $http;
    this.$q = $q;
    this.$rootScope = $rootScope;
    }
    
    loadData() {
     return "Data from loadData() in the <%= upCaseName %>Service!";
    }
}

<%= upCaseName %>Service.$inject = ["$http", "$q", "$rootScope"];
export default <%= upCaseName %>Service;