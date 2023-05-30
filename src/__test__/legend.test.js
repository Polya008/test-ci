import displayLife from '../legend';

test('show healthy', () => {
  const result = displayLife({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});
test('show wounded', () => {
  const result = displayLife({ name: 'Гном', health: 35 });
  expect(result).toBe('wounded');
});
test('show critical', () => {
  const result = displayLife({ name: 'Ученик', health: 10 });
  expect(result).toBe('critical');
});
test('show 0', () => {
  const result = displayLife({ name: 'Ученик' });
  expect(result).toBe(0);
});
