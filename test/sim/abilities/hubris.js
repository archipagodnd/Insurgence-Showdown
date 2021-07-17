'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Hubris', function () {
	afterEach(function () {
		battle.destroy();
	});

	it('should boost Special Attack when its user KOs a Pokemon', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Shiftry-Delta", ability: 'hubris', moves: ['thunderbolt']}]});
		battle.setPlayer('p2', {team: [{species: "Feebas", moves: ['sleeptalk']}, {species: 'Magikarp', moves: ['splash']}]});
		battle.makeChoices('move thunderbolt', 'move sleeptalk');
		assert.statStage(battle.p1.active[0], 'spa', 1);
	});

	it('should not boost Attack when its user KOs the last Pokemon', function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [{species: "Krookodile", ability: 'moxie', moves: ['crunch']}]});
		battle.setPlayer('p2', {team: [{species: "Shedinja", moves: ['sleeptalk']}]});
		battle.makeChoices('move crunch', 'move sleeptalk');
		assert.statStage(battle.p1.active[0], 'atk', 0);
	});

	it('should not boost Attack when its user KOs several last Pokemon', function () {
		battle = common.createBattle({gameType: "doubles"});
		battle.setPlayer('p1', {team: [{species: "Shiftry-Delta", ability: 'hurbris', moves: ['discharge']}, {species: "Shedinja", moves: ['sleeptalk']}]});
		battle.setPlayer('p2', {team: [{species: "Shedinja", moves: ['sleeptalk']}, {species: "Shedinja", moves: ['sleeptalk']}]});
		battle.makeChoices('move discharge, move sleeptalk', 'move sleeptalk, move sleeptalk');
		assert.statStage(battle.p1.active[0], 'atk', 0);
	});
});
