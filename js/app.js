//angular
angular.module('tiendaApp', [])
  .controller('mainController',['$http', '$log', '$scope', '$compile', '$rootScope', function($http, $log, $scope, $compile, $rootScope) {
   
    var mainCtr = this;
      
    $("#sec_ofertas").show();
    $("#sec_carrousel").show();
    mainCtr.carrito = {};
    mainCtr.carrito.arrayProd = [];
    mainCtr.carrito.total;
    mainCtr.carrito.tamano =0;
    mainCtr.arrayProd = [];
    //get result database
     $http({method: 'GET', url: 'getCatalogo.php'}).success(function(data) {
        console.log("json database " + data);
          mainCtr.arrayProd = data;
    });
   
    mainCtr.agregarACarrito = function (prodToAdd) {
			console.log("agregarACarrito function...producto a agregar: " + prodToAdd);
            mainCtr.carrito.arrayProd.push(prodToAdd);
            mainCtr.carrito.total = mainCtr.carrito.total + prodToAdd.precio;
            mainCtr.carrito.tamano =  mainCtr.carrito.arrayProd.length;
            console.log("Se agrego con exito" + mainCtr.carrito.arrayProd.length);
		}
    mainCtr.verRefris = function(){
        $("#sec_ofertas").hide();
        $("#sec_carrousel").hide();
        $http({method: 'GET', url: 'getRefris.php'}).success(function(data) {
            console.log("get refris funtion");
            mainCtr.arrayProd = data;
        });
    }
    mainCtr.verEstufas = function(){
        $("#sec_ofertas").hide();
        $("#sec_carrousel").hide();
        $http({method: 'GET', url: 'getEstufas.php'}).success(function(data) {
            console.log("get estufas funtion");
            mainCtr.arrayProd = data;
        });
    }
    mainCtr.verMicros = function(){
        $("#sec_ofertas").hide();
        $("#sec_carrousel").hide();
        $http({method: 'GET', url: 'getMicros.php'}).success(function(data) {
            console.log("get micros funtion");
            mainCtr.arrayProd = data;
        });
    }
    mainCtr.verLavadoras = function(){
        $("#sec_ofertas").hide();
        $("#sec_carrousel").hide();
        $http({method: 'GET', url: 'getLavadoras.php'}).success(function(data) {
            console.log("get lavadoras funtion");
            mainCtr.arrayProd = data;
        });
    }
    mainCtr.verOtros = function(){
        $("#sec_ofertas").hide();
        $("#sec_carrousel").hide();
        $http({method: 'GET', url: 'getOthers.php'}).success(function(data) {
            console.log("get otros funtion");
            mainCtr.arrayProd = data;
        });
    }
    mainCtr.limpiar = function(){
        mainCtr.carrito.arrayProd = [];
    }
    mainCtr.goHome = function(){
        $("#sec_ofertas").show();
        $("#sec_carrousel").show();
        mainCtr.arrayProd = [];
    }  

  }]);