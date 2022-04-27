module.exports = {
    name: 'canada',
    description: "Embedded link to covid tracker and rules on how you can avoid getting covid.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#E21D1D')
        .setTitle('Canadian Covid Cases')
        .setURL('https://www.google.com/search?q=canada+covide+cases&rlz=1C1CHBF_enCA911CA911&oq=canada+covide+cases&aqs=chrome..69i57j0i10i433j0i10i457j0i10l7.7452j0j15&sourceid=chrome&ie=UTF-8')
        .setDescription('Stay up to date with the Canadian covid cases and how to protect yourself.')
        .addFields(
            {name: 'Rule 1', value: 'Always sanitize/wash your hands.'},
            {name: 'Rule 2', value: 'Wear your mask indoors.'},
            {name: 'Rule 3', value: 'Keep a 6 feet distance from others.'},
            {name: 'Rule 4', value: 'GET VACCINATED!!!!.'}
        )
        .setImage('https://i.itworldcanada.com/wp-content/uploads/2021/02/GettyImages-1167646496-e1614227887609.jpg')
        .setFooter('Stay Safe and Healthy')

        message.channel.send({embeds: [newEmbed]});
    }
 

}