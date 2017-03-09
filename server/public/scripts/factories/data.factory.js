colorBlocks.factory('DataFactory', ['$http', function($http) {
  console.log("data factory running");

  self.colors = ['red', 'blue', 'magenta', 'green', 'pink'];

//sends colors arrray
  return {
    allColors: colors
  };

}]);//end of colorBlocks.factory
