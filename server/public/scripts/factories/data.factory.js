colorBlocks.factory('DataFactory', ['$http', function($http) {
  console.log("data factory running");
  self.colors = ['red', 'blue', 'magenta', 'green', 'pink'];


  return {
    allColors: colors
  };

}]);
