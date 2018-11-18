// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(customerName) {
  customerName.toUpperCase();
}
// upperCaseCustomerName(customerName)

function setBestCustomer(customerName) {
  customerName = 'not bob';
}
// setBestCustomer(customerName)

function overwriteBestCustomer() {
  'maybe bob';
}


function changeLeastFavoriteCustomer() {
  
}


  describe('changeLeastFavoriteCustomer()', function() {
    it('unsuccessfully tries to reassign the least favorite customer', function() {
      expect(changeLeastFavoriteCustomer).to.throw(TypeError);
    });
  });
});
