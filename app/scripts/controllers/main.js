'use strict';

angular.module('teamPickerApp').controller('MainCtrl', function ($scope) {
  $scope.players = ['wes', 'jodi', 'jeff', 'oscar', 'nathan', 'andrew', 'micah', 'erica'];
  $scope.teams = [];
  $scope.teamVar = 2;
  $scope.showTeams = false;


  var adjectives = [
    'raging',
    'illiterate',
    'spastic',
    'crappy',
    'douchey',
    'silly',
    'riotous',
    'hysterical',
    'hairy',
    'adorable',
    'groinal',
    'elegant',
    'ugliest',
    'mushy',
    'panicky',
    'repulsive',
    'obnoxious',
    'itchy',
    'ugly',
    'grumpy',
    'crooked',
    'mammoth',
    'teeny-tiny',
    'rotten',
    'greasy',
    'filthy',
    'flaky',
    'creepy',
    'attractive',
    'unattractive',
    'icky',
    'vomitous',
    'nauseating',
    'dirty',
    'cutest'
  ];

  var nouns = [
    'unicorns',
    'mermaid eggs',
    'exorcists',
    'morticians',
    'alcoholics',
    'weiners',
    'kumquats',
    'holes',
    'lunatics',
    'nuts',
    'gypsies',
    'fissures',
    'boils',
    'pricks',
    'perspirers',
    'mcRibs',
    'lickers',
    'suckers',
    'hamburglers',
    'dicks',
    'attackers'
  ];

  $scope.getTeamName = function(num) {
    var adj = Math.floor(Math.random() * (adjectives.length));
    var noun = Math.floor(Math.random() * (nouns.length));

    var teamName = adjectives[adj] + ' ' + nouns[noun];
    // adjectives.splice(adj,1);
    // nouns.splice(noun,1);

    return teamName;
  };

  $scope.addPlayer = function() {
    if (this.playerName) {
      this.players.push(this.playerName);
      this.playerName = '';
    }
  };

  $scope.makeTeams = function() {
    this.teams = [];
    var shuffled = _.shuffle(this.players);
    shuffled.forEach(function(player, idx) {
      var teamNumber = idx % $scope.teamVar;
      $scope.teams[teamNumber] = $scope.teams[teamNumber] || [];
      $scope.teams[teamNumber].push(player);
      $scope.teams[teamNumber].name = $scope.getTeamName();
    });
    this.showTeams = true;
  };

  $scope.peoplePerTeam = function() {
    this.teams = [];
    var shuffled = _.shuffle(this.players);
    var numTeams = Math.floor(shuffled.length / this.teamVar);
    shuffled.forEach(function(player, idx) {
      var teamNumber = idx % numTeams;
      $scope.teams[teamNumber] = $scope.teams[teamNumber] || [];
      $scope.teams[teamNumber].push(player);
      $scope.teams[teamNumber].name = $scope.getTeamName();
    });
    this.showTeams = true;
  };

  $scope.remove = function(idx) {
    $scope.players.splice(idx, 1);
  };

});
