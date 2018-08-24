var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessae', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'hello there';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
