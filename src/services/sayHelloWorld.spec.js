const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
  it('Should say Hello World!', () => {
    const response = sayHelloWorld.sayHello();
    expect(response).toBe('Hello World!')
  });

  it('Should say Hello Iuri!', () => {
    const response = sayHelloWorld.sayHello('Iuri');
    expect(response).toBe('Hello Iuri!')
  });
});