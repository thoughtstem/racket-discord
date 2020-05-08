# racket-discord

A discord bot (proof of concept) for running Racket code

1) It is not currently secure.  It just blindly executes arbitrary code.
2) I probably should have committed the node modules.  Project needs cleanup.
3) You'll need to do some configuration to get this (or any) bot to work on Discord.  You'll need to generate a secret token, register your bot, etc.
    A) The Token I commited in `config.json` is old.  (I've removed it from my bot.  And actually, Discord will automatically detect if you commit a bot token to github.  The bot will be automatically disabled.)


You should probably make a hello world bot first. Resources:

* https://gist.github.com/y21/a599ef74c8746341dbcbd32093a69eb8
* https://gist.github.com/eslachance/3349734a98d30011bb202f47342601d3
