(function() {
'use strick';

  angular.module('LunchCheck',[])
  .controller('LunchCheckCtrl', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.lunchMenuInput = '';
    $scope.displayMessage = '';
    $scope.messageExtraStyleWithData = false;
    $scope.messageExtraStyleNoData = false;

    var messages = {
      noramlStateMsg : 'Enjoy!',
      exceedingStateMsg: 'Too much!',
      emptyStateMsg: 'Please enter data first'
    };

    $scope.onClickCheckProcess = function(){
       setDisplayMessage();
    }

    function setDisplayMessage(){
      if($scope.lunchMenuInput.length == 0){
         $scope.displayMessage = messages.emptyStateMsg;
         $scope.messageExtraStyleWithData = false;
         $scope.messageExtraStyleNoData = true;
      }else{
        var items = $scope.lunchMenuInput.split(',');

        var filterItemsArr = items.filter(item => item.replace(/ /g,'').length !== 0);

        $scope.displayMessage = filterItemsArr.length <= 3 ? messages.noramlStateMsg : messages.exceedingStateMsg;
         $scope.messageExtraStyleNoData = false;
         $scope.messageExtraStyleWithData = true;
      }
    }

  }

})();
