const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const { cards, choices } = require('../cards.json');
const Canvas = require('@napi-rs/canvas');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('card')
		.setDescription('Find a class card by name')
		.addStringOption(option =>
			option.setName('card_name')
				.setDescription('The card to fetch')
				.setRequired(true)
				.setAutocomplete(true)),
    async execute(interaction) {
        const name = interaction.options.getString('card_name');
        let attachments = [];
        if (cards.hasOwnProperty(name.toLowerCase())) {
            const related = cards[name.toLowerCase()].hasOwnProperty("RelatedIDs");
            const maxWidth = (related ? Math.max(cards[name.toLowerCase()]["IDs"].length, cards[name.toLowerCase()]["RelatedIDs"].length) : cards[name.toLowerCase()]["IDs"].length) * 297;
            const canvas = Canvas.createCanvas(maxWidth, related ? 900 : 450);
            const context = canvas.getContext('2d');
            var i = 0;
            var IDtext = "IDs: " + cards[name.toLowerCase()]["IDs"].join(", ");
            for (const id of cards[name.toLowerCase()]["IDs"]) {
                const cardImg = await Canvas.loadImage("./card_images/" + id + ".png");
                context.drawImage(cardImg, i * 297, 0);
                i++;
                //embeds.push(new EmbedBuilder().setURL("https://github.com/stiffmeds/AtO-Cards").setImage("https://raw.githubusercontent.com/stiffmeds/AtO-Cards/main/" + id + ".png").setTitle(name).setFooter({ text: "IDs: " + cards[name.toLowerCase()]["IDs"].join(", ") }));
            };
            //attachments.push(new AttachmentBuilder(await canvas.encode('png'), { name: name + ".png" }));
            if (related) {
                /*const canvasRelated = Canvas.createCanvas(297 * cards[name.toLowerCase()]["RelatedIDs"].length, 450);
                const contextRelated = canvasRelated.getContext('2d');*/
                i = 0;
                for (const id of cards[name.toLowerCase()]["RelatedIDs"]) {
                    const cardImg = await Canvas.loadImage("./card_images/" + id + ".png");
                    context.drawImage(cardImg, i * 297, 450);
                    i++;
                    //embeds.push(new EmbedBuilder().setURL("https://github.com/stiffmeds/AtO-Cards/blob/main/README.MD").setImage("https://raw.githubusercontent.com/stiffmeds/AtO-Cards/main/" + id + ".png").setFooter({ text: "Related IDs: " + cards[name.toLowerCase()]["RelatedIDs"].join(", ") }));
                };
                IDtext += "\nRelated IDs: " + cards[name.toLowerCase()]["RelatedIDs"].join(", ");
                //attachments.push(new AttachmentBuilder(await canvasRelated.encode('png'), { name: name + " Related.png" }));
            };
            attachments.push(new AttachmentBuilder(await canvas.encode('png'), { name: name + ".png" }));
            await interaction.reply({
                embeds: [new EmbedBuilder().setTitle(name).setFooter({ text: IDtext })], files: attachments });
        } else {
            await interaction.reply({ embeds: [new EmbedBuilder().setDescription('A card by this name could not be found :slight_frown:\nPlease ping @stiffmeds if you think this is an error.')], ephemeral: true });
		}
	},
	async autocomplete(interaction) {
		const focusedValue = interaction.options.getFocused().toLowerCase();
        const filtered = choices.filter(choice => choice.toLowerCase().includes(focusedValue)).slice(0, 25);
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},
};