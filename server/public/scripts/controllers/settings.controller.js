colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory, $scope) {
  console.log("settings controller running");

  var self = this;

//pulls allColor array from data.factory.js
  self.colors = DataFactory.allColors;

//placeholder from input on configview.html
  self.newColor = '';

//button click function being triggered from configview.html
  self.addColor = function(){
    self.colors.push(angular.copy(self.newColor));
  }

}]);//end of colorBlocks.controller
