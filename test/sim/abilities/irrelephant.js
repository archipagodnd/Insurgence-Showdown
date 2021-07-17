'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Irrelephant', function () {
	afterEach(function () {
		battle.destroy();
	});

	it('should ignore type-based immunities', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Donphan-Mega", ability: 'irrelephant', moves: ['rapidspin']}]});
		battle.setPlayer('p2', {team: [{species: "Feebas-Delta", moves: ['sleeptalk']}]});
		battle.makeChoices('move rapidspin', 'move sleeptalk');
		const defender = battle.p2.active[0];
		assert.false.equal(defender.hp, defender.maxhp);
	});

	it('should not ignore ability-based immunities', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Donphan-Mega", ability: 'irrelephant', moves: ['seedbomb']}]});
		battle.setPlayer('p2', {team: [{species: "Miltank", ability: 'sapsipper', moves: ['sleeptalk']}]});
		battle.makeChoices('move seedbomb', 'move sleeptalk');
		const defender = battle.p2.active[0];
		assert.equal(defender.hp, defender.maxhp);
	});

	it('should not ignore item-based immunities', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Donphan-Mega", ability: 'irrelephant', moves: ['earthquake']}]});
		battle.setPlayer('p2', {team: [{species: "Miltank", ability: 'sapsipper', item: 'airballoon', moves: ['sleeptalk']}]});
		battle.makeChoices('move earthquake', 'move sleeptalk');
		const defender = battle.p2.active[0];
		assert.equal(defender.hp, defender.maxhp);
	});

	it('should not ignore Magnet Rise', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Donphan-Mega", ability: 'irrelephant', moves: ['earthquake']}]});
		battle.setPlayer('p2', {team: [{species: "Regieleki", ability: 'sapsipper', moves: ['magnetrise']}]});
		battle.makeChoices('move earthquake', 'move magnetrise');
		const defender = battle.p2.active[0];
		assert.equal(defender.hp, defender.maxhp);
	});
});
