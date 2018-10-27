(function(){
'use strick';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var ToBuyCtrl = this;

  ToBuyCtrl.getToBuyItems = function(){
    return ShoppingListCheckOffService.getToBuyItems();
  };

  ToBuyCtrl.isToBuyItems = function(){
    return ShoppingListCheckOffService.isToBuyItems();
  };

  ToBuyCtrl.onBoughtItem = function(index){
      ShoppingListCheckOffService.boughtItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var AlreadyBoughtCtrl = this;

  AlreadyBoughtCtrl.isBoughtItems = function(){
    return ShoppingListCheckOffService.isBoughtItems();
  };

  AlreadyBoughtCtrl.getBoughtItems = function(){
    return ShoppingListCheckOffService.getBoughtItems();
  };
}

function ShoppingListCheckOffService(){
  var service = this;
  var toBuyItems = [];
  var boughtItems = [];

  toBuyItems.push({ name: "cookies_a", quantity: 10 });
  toBuyItems.push({ name: "cookies_b", quantity: 20 });
  toBuyItems.push({ name: "cookies_c", quantity: 30 });
  toBuyItems.push({ name: "cookies_d", quantity: 40 });
  toBuyItems.push({ name: "cookies_e", quantity: 50 });

  service.getToBuyItems = function(){
    return toBuyItems;
  };

  service.isBoughtItems = function(){
    return boughtItems.length != 0;
  };

  service.getBoughtItems = function(){
    return boughtItems;
  };

  service.isToBuyItems = function(){
    return toBuyItems.length != 0;
  };

  service.boughtItem = function(index){
    var item = toBuyItems[index];
    item.isAlreadyBought = true;
    boughtItems.push(item);
    toBuyItems.splice(index, 1);
  };

}

})();
