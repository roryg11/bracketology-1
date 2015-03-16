import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imgUrl: DS.attr('string'),
  oPpg: DS.attr('string'),
  oRpg: DS.attr('string'),
  oApg: DS.attr('string'),
  oFg: DS.attr('string'),
  dPpg: DS.attr('string'),
  dRpg: DS.attr('string'),
  dBpg: DS.attr('string'),
  dSpg: DS.attr('string'),
  oPpgRank: DS.attr('string'),
  oRpgRank: DS.attr('string'),
  oApgRank: DS.attr('string'),
  oFgRank: DS.attr('string'),
  dPpgRank: DS.attr('string'),
  dRpgRank: DS.attr('string'),
  dBpgRank: DS.attr('string'),
  dSpgRank: DS.attr('string')
});
