'use strict';

angular.module('teamPickerApp').controller('MainCtrl', function ($scope) {
  $scope.players = [];
  $scope.teams = 2;

  $scope.addPlayer = function() {
    if (this.playerName) {
      this.players.push(this.playerName);
      this.playerName = '';
    }
  };

  $scope.makeTeams = function() {
    var shuffled = _.shuffle(this.players);
    for (var i = this.teams - 1; i >= 0; i--) {
      console.log(this.teams[i]);
    }
    console.log(_.shuffle(this.players));
  };

});
