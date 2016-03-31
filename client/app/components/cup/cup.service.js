class CupService {
    constructor($http, $q,  $rootScope) {
        this.$http = $http;
        //this.baseApi = baseApi;
        this.$q = $q;
        this.$rootScope = $rootScope;
    }

    loadData() {
        console.log("in loadData");
        const d = this.$q.defer();
        this.$http.get("https://api.github.com/search/users?q=tehburl").success( (info) => {
            return info;
        }).then( (result) => {
            d.resolve(result.data);
        }, () => {
            d.reject();
        });

        return d.promise;
    }
}
CupService.$inject = ["$http", "$q", "$rootScope"];
export default CupService;