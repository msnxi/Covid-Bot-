module.exports = {
    name: 'covidnews',
    description: "The latest news articles for any covid related headlines.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1D3FE2')
        .setTitle('Latest Covid News')
        .setURL('https://www.google.com/search?q=covid&source=lmns&tbm=nws&bih=920&biw=1184&rlz=1C1CHBF_enCA911CA911&hl=en&sa=X&ved=2ahUKEwjpj8mnp7L3AhW0D1kFHeLFDsMQ_AUoAXoECAEQAQ')
        .setDescription('The latest news articles for any covid related headlines.')
        .addFields(
            {name: 'Rule 1', value: 'Always sanitize/wash your hands.'},
            {name: 'Rule 2', value: 'Wear your mask indoors.'},
            {name: 'Rule 3', value: 'Keep a 6 feet distance from others.'},
            {name: 'Rule 4', value: 'GET VACCINATED!!!!'}
        )
        .setImage('https://files.tvo.org/files/s3fs-public/media-library/covid19-1.jpg')
        .setFooter('Stay Safe and Healthy')

        message.channel.send({embeds: [newEmbed]});
    }
 

}