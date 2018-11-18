// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(customerName) {
  customerName.toUpperCase();
}
upperCaseCustomerName(customerName)

function setBestCustomer(customerName) {
  customerName = 'not bob';
}
setBestCustomer(customerName)



  describe('overwriteBestCustomer()', function() {
    it('overwrites the best customer', function() {
      overwriteBestCustomer('maybe bob');

      expect(window.bestCustomer).to.equal('maybe bob');
    });
  });

  describe('changeLeastFavoriteCustomer()', function() {
    it('unsuccessfully tries to reassign the least favorite customer', function() {
      expect(changeLeastFavoriteCustomer).to.throw(TypeError);
    });
  });
});
