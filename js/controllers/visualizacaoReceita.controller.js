(function(){
    'use strict';

    angular
        .module('receitas')
        .controller('visualizacaoReceitaController', visualizacaoReceitaController);

    function visualizacaoReceitaController(){
        var vm = this;

        vm.nomeReceita = 'Batata Rosti';
        vm.urlReceita = 'https://www.youtube.com/watch?v=a0YQSX_UUcE&list=PLzSOQI1z2BAVJ5M4rPPCtaiyrj6fPqy8L&index=6';
        vm.ingredientesReceita = '500g de batata - R$3,31 \n' +
                                'Margarina (ou manteiga) - R$3,00 \n' +
                                'Requeijão - R$4,59 \n' +
                                '150g de presunto - R$4,08';
    }

})();