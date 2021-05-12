module.exports = {
    name: 'timer',
    description: '',
    execute: async function (message, client, cmd) {
        if (!Number(cmd)) {
            message.channel.send('WARNING : PLEASE INSET VALID NUMBER');
          return;
        }
        const timer = Number(cmd) > 1000? Number(cmd): Number(cmd) * 1000;
        if (timer) {
            message.channel.send(`----------You have a count for ${cmd} seconds-----------`);
            setTimeout(function() {
                message.channel.send(`*************${cmd} is last please don\' send eny more message***********`);
            }, timer)
        }
    }
}
