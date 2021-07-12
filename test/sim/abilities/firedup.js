'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Fired Up', function () {
	afterEach(function () {
		battle.destroy();
	});

	it('should boost Attack, Special Attack and Speed before using a Fire-type attack', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Emolga-Delta", ability: 'firedup', moves: ['flamethrower', 'darkpulse']}]});
		battle.setPlayer('p2', {team: [{species: "Leafeon", evs: {hp: 60}, ability: 'shellarmor', item: ['focussash'], moves: ['healbell']}]});

		battle.makeChoices('move flamethrower', 'move healbell');

		assert.equal(battle.p2.active[0].hp, 1);
	});

	it('should not boost Attack, Special Attack and Speed before using a non Fire-type attack', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Emolga-Delta", ability: 'firedup', moves: ['flamethrower', 'darkpulse']}]});
		battle.setPlayer('p2', {team: [{species: "Feebas", moves: ['sleeptalk']}, {species: 'Magikarp', moves: ['splash']}]});
		battle.makeChoices('move darkpulse', 'move sleeptalk');
		assert.statStage(battle.p1.active[0], 'atk', 0);
		assert.statStage(battle.p1.active[0], 'spa', 0);
		assert.statStage(battle.p1.active[0], 'spe', 0);
	});

	it('should not boost Attack, Special Attack and Speed before using a Fire-type status move', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Emolga-Delta", ability: 'firedup', moves: ['flamethrower', 'darkpulse', 'willowisp']}]});
		battle.setPlayer('p2', {team: [{species: "Feebas", moves: ['sleeptalk']}, {species: 'Magikarp', moves: ['splash']}]});
		battle.makeChoices('move willowisp', 'move sleeptalk');
		assert.statStage(battle.p1.active[0], 'atk', 0);
		assert.statStage(battle.p1.active[0], 'spa', 0);
		assert.statStage(battle.p1.active[0], 'spe', 0);
	});
});
