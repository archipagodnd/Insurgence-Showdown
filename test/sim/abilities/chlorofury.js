'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Chlorofury', function () {
	afterEach(function () {
		battle.destroy();
	});

	it(`should give 1 spatt boost for each faint, should remove after 2 turns`, function () {
		battle = common.createBattle([[
			{species: "Cresselia", moves: ['lunardance']},
			{species: 'Ludicolo', moves: ['lunardance']},
			{species: 'Lotad', ability: ['chlorofury'], moves: ['protect']},
		], [
			{species: "Mew", moves: ['protect']},
		]]);

		battle.makeChoices('move lunardance', 'move protect');
		battle.makeChoices('move lunardance', 'move protect');

		assert.statStage(battle.p1.active[0], 'spe', 1);
		assert.statStage(battle.p1.active[0], 'spa', 2);

		battle.makeChoices('move protect', 'move protect');
		battle.makeChoices('move protect', 'move protect');

		assert.statStage(battle.p1.active[0], 'spe', 0);
		assert.statStage(battle.p1.active[0], 'spa', 0);
	});

	it(`should not boost if no pokemon have fainted on your side`, function () {
		battle = common.createBattle([[
			{species: 'Lotad', ability: ['chlorofury'], moves: ['protect']},
			{species: "Cresselia", moves: ['lunardance']},
			{species: 'Ludicolo', moves: ['lunardance']},
		], [
			{species: "Mew", moves: ['protect']},
		]]);

		assert.statStage(battle.p1.active[0], 'spe', 0);
		assert.statStage(battle.p1.active[0], 'spa', 0);
	});
});
