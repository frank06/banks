import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  
  name(i) {
    return `Bank ${i+1}`
  },
  
  ceo() {
    return faker.name.lastName()
  },
  
  employees() {
    return faker.random.number()
  }
  
});