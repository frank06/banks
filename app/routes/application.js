import Ember from 'ember';

export default Ember.Route.extend({
  
  model() {
    return Ember.RSVP.hash({
      bank: this.store.findRecord('bank', 1)
    });
  },
  
  setupController(controller, models) {
    controller.setProperties(models);
  }
  
});
