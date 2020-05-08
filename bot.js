const Discord = require('discord.js');
const client = new Discord.Client();
const { exec } = require("child_process")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

	if (msg.content.split("")[0] === '#') {

		var cmd = msg.content.replace(/#/, "")
		exec(  "racket -e \"(require 2htdp/image) (save-image "+cmd+" \\\"imgs/funsy.png\\\")\""
			, (error, stdout, stderr) => {

				msg.reply('pong', {files: ["./imgs/funsy.png"]});

				if (error) {
					console.log(`error: ${error.message}`);
					return;
				}
				if (stderr) {
					console.log(`stderr: ${stderr}`);
					return;
				}
				console.log(`stdout: ${stdout}`);
			});

	}
});

const config = require("./config.json");
client.login(config.token);
