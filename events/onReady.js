/**
 * @file Ready Event File.
 * @author mrdennis1212
 * @since 1.0.0
 * @version 1.0.0
 */

module.exports = {
	name: "ready",
	once: true,

	/**
	 * @description Executes when client is ready (bot initialization).
	 * @param {import('../typings').Client} client Main Application Client.
	 */
	
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		var pjson = require('../package.json');
		const version = pjson.version;

		client.user.setPresence({ activities: [{ name: `/help | teamsynix.com ${ version }` }], status: 'online' });
	},
};
