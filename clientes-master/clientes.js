console.log("=== CLIENTES ===");

// jQuery Wrapper
jQuery(function() { 
  // Actions
  var getCustomersError = function() {
    console.log('ERROR');
  };

  var getCustomersSuccess = function(customers) {
    var html = customers.map(function(customer) {
      var { name, email, phone, country, id } = customer;
      
      return `
      <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${country}</td>
      </tr>
      `;
    }).join('');

    $('#customers tbody').empty();
    $('#customers').append(html);
  };

  var getCustomers = function() {
    $.ajax({
      url: 'http://www.mocky.io/v2/5e94f67031000097be5e35db',
      dataType: 'jsonp',
      method: 'GET',
      error: getCustomersError,
      success: getCustomersSuccess
    });
  }();
});
