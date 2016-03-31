class BaseService {
  constructor() {
    this.baseApiAddress = 'http://localhost/blargh';
  }

  alertBaseApiAddress () {
    alert(this.baseApiAddress);
  }
  
}

export default BaseService;
