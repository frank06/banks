import Ember from 'ember';
import computedFilterByQuery from 'ember-cli-filter-by-query';

export default Ember.Controller.extend({
  
  filter: Ember.computed('search', function() {
    
    const search = this.get('search');
    
    if (search) {
      return this.get('bank.products').filter((product) => {
        return new RegExp(search, "gi").test(product.get('description'));
      });
    }
    
    return this.get('bank.products');
    
  }),
  
  filteredList: computedFilterByQuery('bank.products', 'description', 'query')
  
});
