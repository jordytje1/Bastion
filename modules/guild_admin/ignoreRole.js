/**
 * @file ignoreRole command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const string = require('../../handlers/languageHandler');

exports.run = async (Bastion, message, args) => {
  if (!message.member.hasPermission(this.help.userPermission)) {
    /**
     * User has missing permissions.
     * @fires userMissingPermissions
     */
    return Bastion.emit('userMissingPermissions', this.help.userPermission);
  }
  if (!args.id) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return Bastion.emit('commandUsage', message, this.help);
  }

  if (!message.guild.roles.get(args.id)) {
    /**
     * Error condition is encountered.
     * @fires error
     */
    return Bastion.emit('error', string('notFound', 'errors'), string('roleNotFound', 'errorMessage'), message.channel);
  }

  try {
    let guildSettings = await Bastion.db.get(`SELECT ignoredRoleIDs FROM guildSettings WHERE guildID=${message.guild.id}`);
    let ignoredRoleIDs = guildSettings.ignoredRoleIDs, isIgnored = false,
      description = null, color = Bastion.colors.red;

    if (ignoredRoleIDs) {
      ignoredRoleIDs = ignoredRoleIDs.split(' ');
      if (ignoredRoleIDs.includes(args.id)) {
        isIgnored = true;
      }
    }
    else {
      ignoredRoleIDs = [];
    }

    if (isIgnored) {
      if (args.remove) {
        ignoredRoleIDs.splice(ignoredRoleIDs.indexOf(args.id), 1);
        color = Bastion.colors.green;
        description = 'I\'ll stop ignoring commands from this role, from now.';
      }
      else {
        description = 'I\'m already ignoring commands from this role.';
      }
    }
    else {
      if (args.remove) {
        description = 'I\'m already accepting commands from this role.';
      }
      else {
        ignoredRoleIDs.push(args.id);
        color = Bastion.colors.green;
        description = 'I\'ll ignore commands from this role, from now.';
      }
    }
    ignoredRoleIDs = ignoredRoleIDs.join(' ');

    await Bastion.db.run(`UPDATE guildSettings SET ignoredRoleIDs='${ignoredRoleIDs}' WHERE guildID=${message.guild.id}`);

    message.channel.send({
      embed: {
        color: color,
        description: description
      }
    }).catch(e => {
      Bastion.log.error(e);
    });
  }
  catch (e) {
    Bastion.log.error(e);
  }
};

exports.config = {
  aliases: [],
  enabled: true,
  argsDefinitions: [
    { name: 'id', type: String, defaultOption: true },
    { name: 'remove', type: Boolean, alias: 'r' }
  ]
};

exports.help = {
  name: 'ignoreRole',
  description: string('ignoreRole', 'commandDescription'),
  botPermission: '',
  userPermission: 'ADMINISTRATOR',
  usage: 'ignoreRole <ROLE_ID> [--remove]',
  example: [ 'ignoreRole 295982817647788032', 'ignoreRole 295982817647788032 --remove' ]
};
