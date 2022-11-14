/**
 * @file Default Bot Mention Command
 * @author mrdennis1212
 * @since 1.0.0
 */

require("dotenv").config();
const prefix = process.env.PREFIX;

module.exports = {
	/**
	 * @description Executes when the bot is pinged.
	 * @author mrdennis1212
	 * @param {import('discord.js').Message} message The Message Object of the command.
	 */

	async execute(message) {
		return message.channel.send(
			`Hi ${message.author}! My prefix is \`${prefix}\`, get help by \`${prefix}help\``
		);
	},
};
