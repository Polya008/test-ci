import showLifeBar from '../life';

test.each([
	['user1 - health: 1346', { name: 'Маг', health: 1348 }, 'healthy'],
	['user2 - health: 50', { name: 'Воин', health: 50 }, 'healthy'],
	['user3 - health: 49', { name: 'Лучник', health: 49 }, 'wounded'],
	['user4 - health: 15', { name: 'Асасин', health: 15 }, 'wounded'],
	['user5 - health: 1', { name: 'Мертвец', health: 1 }, 'critical'],
])('testing showLifeBar function for %s user with %i health', (_, user, expected) => {
	const result = showLifeBar(user);
	expect(result).toBe(expected);
});