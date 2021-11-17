import {Utils, FS, Net} from '../../lib';

const customCss = FS(`config/custom.css`).createAppendStream();

export const commands: ChatCommands = {
	async custombadge(target, room, user) {
		this.checkCan('ban', null, room);
		let parts = target.split(',').map(param => param.trim());
		if (parts.length < 2) return this.parse('/help custombadge');

		let name = toID(parts[0]);
		let pokemonName = parts[1];

		let badgeUrl = "https://raw.githubusercontent.com/Jackinev/pokeicons/master/40x30/" + pokemonName + ".png"
		try {
			await Net(badgeUrl).get();
		} catch (e) {
			return this.errorReply("Invalid Pokemon name.");
		}

		void customCss.writeLine(
			`[id$="-userlist-user-` + name +
			`"]{background: url("` + badgeUrl +
			`") no-repeat right -7px center;}`
		);

		this.sendReply("|raw|" + name + "'s badge was successfully set. Badge:<br /><img src='" + badgeUrl + "' width='40' height='30'>");
		Monitor.adminlog(name + "'s badge was successfully set by " + user.name + ".");
	},
	cb: 'custombadge',

	custombadgehelp: [
		"/custombadge or /cb [username], [Pokemon name] - Set a user's badge to that Pokemon's icon.",
		"Make sure that the name is all lowercase and formatted properly for alternate forms."],
};
