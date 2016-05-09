import Ember from 'ember';
import DS from 'ember-data';
import computedFilterByQuery from 'ember-cli-filter-by-query';

export default Ember.Controller.extend({
  
  filter1: Ember.computed('input1', function() {
    
    const search = this.get('input1');
    
    if (search) {
      
      const result = this.get('bank.products').then(function(products) {
        return products.filter((product) => {
          return new RegExp(search, "gi").test(product.get('description'));
        });
      })
      
      return DS.PromiseArray.create({ promise: result });
    }
    
    return this.get('bank.products');
    
  }),
  
  filter2: Ember.computed('input2', function() {
    
    const search = this.get('input2');
    
    if (search) {
      return this.get('bank.products').filter((product) => {
        return new RegExp(search, "gi").test(product.get('description'));
      });
    }
    
    return this.get('bank.products');
    
  }),
  
  filter3: computedFilterByQuery('bank.products', 'description', 'input3')
  
});
