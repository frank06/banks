export default function(server) {

  const banks = server.createList('bank', 10);
  banks[0].products = server.createList('product', 5);

}