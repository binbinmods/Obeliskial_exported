# Tome of Knowledge

A Discord bot that displays Across the Obelisk (AtO) card and item images.

Forked from [Obelisk-Bot/Wilbur](https://github.com/woolleyj20/Obelisk-Bot/).

## Commands
* **/card** _card\_name_: use this command to look up cards or items.

## Installing the Tome of Knowledge bot

1. Clone this repository.
2. [Create a bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) in the [Discord developer portal](https://discord.com/developers/applications).
3. In the _Tome-of-Knowledge_ folder, rename _[exampleconfig.json](https://github.com/stiffmeds/Tome-of-Knowledge/blob/main/exampleconfig.json)_ to _config.json_ and enter your application/client ID (from the _General Information_ tab of the developer portal) and token (from the _Bot_ tab of the developer portal).
4. [Create an invite link for your bot](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#creating-and-using-your-invite-link), selecting the text permissions _Send Messages_, _Send Messages in Threads_, _Manage Messages_, _Embed Links_, _Attach Files_, _Read Message History_, _Use External Emojis_, _Use External Stickers_ and _Use Slash Commands_, then use that link to have your bot join a server.
5. [Install Node.js](https://discordjs.guide/preparations/).
6. [Open the terminal](https://discordjs.guide/preparations/#opening-the-terminal) in the _Tome-of-Knowledge_ folder.
7. Run the command ```npm install``` to install all dependencies.
8. Run the command ```node deploy-commands.js``` to register the /card command.
9. Run the command ```node index.js``` to run the bot.

## Updating Cards

To update cards after an AtO patch, you can either wait for me to update this repository or:
1. Install _[Obeliskial Essentials](https://across-the-obelisk.thunderstore.io/package/meds/Obeliskial_Essentials/)_ (requires v1.2.0 or later).
2. Run AtO.
3. Press F2 to open DevTools.
4. Click the _Tome of Knowledge Export_ button.
5. Right-click AtO in Steam and select _Manage-->Browse Local Files_ and find the updated _cards.json_ and _card\_images_ in the _Tome of Knowledge_ folder.

## Support

Open a github issue or ping @stiffmeds in the **#tome-of-knowledge** channel of the [official Across the Obelisk Discord](https://discord.gg/across-the-obelisk-679706811108163701).

## Donations

I make mods and tools because I love programming, not because I want to make money from it. If you really, really want to donate then my preferred non-profit organisations are [Greyhound Adoptions WA](https://greyhoundadoptionswa.com.au/donation/) ([paypal](https://www.paypal.com/donate?token=m8DwEGGEH0FFsS6PS-5p4MX9_5g8_ocMMrNFjaELN-xcG6Ok-KCFabu5xtB-57QBiOM7QLSuKVUepvL_)) or [Headache Australia](https://headacheaustralia.org.au/donate/).