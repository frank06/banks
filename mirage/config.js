export default function() {

  this.namespace = 'api';

  this.get('/banks');
  this.get('/banks/:id');
  
  this.get('/products/:id');
  
  // this.get('/products/:id', function(schema, request) {
  //   const bankId = request.params.id;
  //   return schema.product.where({ bankId: bankId });
  // });

}