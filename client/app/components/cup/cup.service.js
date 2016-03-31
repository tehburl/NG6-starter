import BaseService from '../../services/base.service';
class CupService extends BaseService {
  constructor($http, $q,  $rootScope) {
        super();
        this.$http = $http;
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
