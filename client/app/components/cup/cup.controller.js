class CupController {
  constructor(cupService) {
    this.name = 'cup';
    this.cupService = cupService;
  }
  clickme() {
    this.cupService.loadData().then((x) => {
      console.log(x);
    });

  }
}

CupController.$inject = ["cupService"];
export default CupController;
