import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  
  name: attr(),
  ceo: attr(),
  employees: attr('number'),
  products: hasMany('product', { async: true })
  
});
