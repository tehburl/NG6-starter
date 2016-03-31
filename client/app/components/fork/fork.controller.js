class ForkController {
  constructor(forkService) {
    this.name = 'fork';
    this.forkService = forkService;  
  }
  clickme() {
    const data = this.forkService.loadData();
    alert("Data From Service: " + data);
  }  
}

ForkController.$inject = ["forkService"];
export default ForkController;
