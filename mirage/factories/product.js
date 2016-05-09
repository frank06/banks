import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  
  name(i) {
    return `Bank Product ${i+1}`
  },
  
  description() {
    return faker.commerce.productName();
  },
  
  accounts() {
    return faker.random.number()
  }
  
});
