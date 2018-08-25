var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessae', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'hello there';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Test';
    var latitude = 2;
    var longitude = 19;
    url =  'https://www.google.com/maps?q=' + latitude + ',' + longitude;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
