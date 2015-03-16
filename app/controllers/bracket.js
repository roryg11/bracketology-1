import Ember from 'ember';

export default Ember.Controller.extend({
  roundTwoGameOneTeamOne: "",
  roundTwoGameOneTeamTwo: "",
  roundTwoGameTwoTeamOne: "",
  roundTwoGameTwoTeamTwo: "",
  roundTwoGameThreeTeamOne: "",
  roundTwoGameThreeTeamTwo: "",
  roundTwoGameFourTeamOne: "",
  roundTwoGameFourTeamTwo: "",
  roundTwoGameFiveTeamOne: "",
  roundTwoGameFiveTeamTwo: "",
  roundTwoGameSixTeamOne: "",
  roundTwoGameSixTeamTwo: "",
  roundTwoGameSevenTeamOne: "",
  roundTwoGameSevenTeamTwo: "",
  roundTwoGameEightTeamOne: "",
  roundTwoGameEightTeamTwo: "",
  roundTwoGameNineTeamOne: "",
  roundTwoGameNineTeamTwo: "",
  roundTwoGameTenTeamOne: "",
  roundTwoGameTenTeamTwo: "",
  roundTwoGameElevenTeamOne: "",
  roundTwoGameElevenTeamTwo: "",
  roundTwoGameTwelveTeamOne: "",
  roundTwoGameTwelveTeamTwo: "",
  roundTwoGameThirteenTeamOne: "",
  roundTwoGameThirteenTeamTwo: "",
  roundTwoGameFourteenTeamOne: "",
  roundTwoGameFourteenTeamTwo: "",
  roundTwoGameFifteenTeamOne: "",
  roundTwoGameFifteenTeamTwo: "",
  roundTwoGameSixteenTeamOne: "",
  roundTwoGameSixteenTeamTwo: "",
  actions: {
    pickRoundTwoGameOneTeamOne: function(teamName){
      var team = this.get('model');
      console.log(team);
      console.log(teamName);
      this.set('roundTwoGameOneTeamOne', teamName);
    },
    pickRoundTwoGameOneTeamTwo: function(teamName){
      var team = this.get('model');
      console.log(team);
      console.log(teamName);
      this.set('roundTwoGameOneTeamTwo', teamName);
    },
  }
});
