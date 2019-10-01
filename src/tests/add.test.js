const add = (a, b) => a + b;
const greetings = (name = 'anonymous') => `Hello ${name}`;

test('should be add 2 numbers', () => {
  const result = add(5,7);  
  expect(result).toBe(12);
});

test('should generate greetings from name', () => {
  const greet = greetings("pavan");
  expect(greet).toBe("Hello pavan");
});

test('should generate greetings from name', () => {
  const greet = greetings();
  expect(greet).toBe("Hello anonymous");
});