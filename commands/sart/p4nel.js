const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageSelectMenu, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vip")
        .setDescription("Vip içeriklere ulaşabilme şartı."),

    run: async (client, interaction) => {
        const prefix = "."; // Özelleştirilecek prefix'i burada belirleyin

        const embed = new EmbedBuilder()
            .setTitle(" P4nel ve Vip kanaldaki diger şeyleri görebilirsiniz alttaki şartı yapıp.!")
            .setDescription(`TikTok'ta p4nel ile ilgili videoların 10 tanesinin yorumlarına discord.gg/paynet yazarak #10ss-gönder kanalına atarak rolünüzü alabilirsiniz.`);

        // Kullanıcının yazdığı komutun adını alın
        const commandName = interaction.commandName;

        // Kullanıcının belirlediğiniz prefix'i veya slash komutu ile çalıştırdığını kontrol edin
        if (commandName === "vip" || (interaction.options.getSubcommand() === "vip" && interaction.options.getSubcommandGroup() === "prefix")) {
            // Prefix veya slash komutu ile çalıştığında komutu çalıştır
            interaction.reply({ embeds: [embed] });
        }
    },
};
