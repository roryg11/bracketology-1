import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.ActiveModelAdapter.extend({

  // slight hack until the ember-cli-dotenv package is fixed
  host: 'https://safe-gorge-4257.herokuapp.com'

});
