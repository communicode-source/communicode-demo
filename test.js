function test( users, =name, callback, callback2 ) {
  callback(users, name);
  callback2();
}

var users = [];
test(users, 'Connor', function(users, name) {
  users.push(name);
}, function() {
  console.log('hi.');
}
  console.log('test');
);
