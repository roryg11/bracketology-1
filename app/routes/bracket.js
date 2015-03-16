import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(){
    this.render({ outlet: 'bracket'});
  },
  model: function(){
    return this.store.find('team');
  }
});
