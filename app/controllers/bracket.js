import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    pickWinner: function(){
      this.get('matchup');
    }
  }
});
