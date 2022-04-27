module.exports = {
    name: 'worldwide',
    description: "Embedded link to covid tracker and rules on how you can avoid getting covid.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#609C17')
        .setTitle('Worldwide Covid Cases')
        .setURL('https://www.google.com/search?q=world+wide+covid+tracker&rlz=1C1CHBF_enCA911CA911&sxsrf=APq-WBvBpLTfPCBYnIb0DOHRYHj02w-S4w%3A1650998028241&ei=DDtoYtuoDsWDtQb25KboBw&ved=0ahUKEwjb3v33rrL3AhXFQc0KHXayCX0Q4dUDCA4&uact=5&oq=world+wide+covid+tracker&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEAoyCAgAEAgQChAeMgYIABAIEB4yCAgAEAgQChAeMggIABAIEAoQHjIGCAAQCBAeMggIABAIEAoQHjIICAAQCBAKEB5KBAhBGABKBAhGGABQYlhiYK4FaAFwAXgAgAFsiAFskgEDMC4xmAEAoAEBwAEB&sclient=gws-wiz')
        .setDescription('Stay up to date with the worldwide covid cases and how to protect yourself.')
        .addFields(
            {name: 'Rule 1', value: 'Always sanitize/wash your hands.'},
            {name: 'Rule 2', value: 'Wear your mask indoors.'},
            {name: 'Rule 3', value: 'Keep a 6 feet distance from others.'},
            {name: 'Rule 4', value: 'GET VACCINATED!!!!'}
        )
        .setImage('https://webfoundation.org/docs/2019/09/Meaningful-Connectivity.jpg')
        .setFooter('Stay Safe and Healthy')

        message.channel.send({embeds: [newEmbed]});
    }
 

}