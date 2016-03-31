class <%= upCaseName %>Controller {
  constructor(<%= name %>Service) {
    this.name = '<%= name %>';
    this.<%= name %>Service = <%= name %>Service;  
  }
  clickme() {
    const data = this.<%= name %>Service.loadData();
    alert("Data From Service: " + data);
  }  
}

<%= upCaseName %>Controller.$inject = ["<%= name %>Service"];
export default <%= upCaseName %>Controller;
