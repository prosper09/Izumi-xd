const { command, isPrivate } = require("../lib/");
command(
  {
    pattern: "owner",
    fromMe: isPrivate,
    desc: "developer vcard",
    type: "user",
  },
  async (message, match, m, client) => {
  const zeta = {
  'contacts': {
    'displayName': "𝙀𝙮𝙥𝙯",
    'contacts': [{
      'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:𝙀𝙮𝙥𝙯\nORG:Eypz\nTEL;type=CELL;type=VOICE;waid=919747257996:919747257996\nEND:VCARD"
    }]
  },
  'contextInfo': {
    'externalAdReply': {
      'title': "𝙀𝙮𝙥𝙯 ⛮",
      'body': "𝙀𝙮𝙥𝙯/🌸```",
      'thumbnailUrl': "https://i.imgur.com/AaP7a7m.jpeg",
      'mediaType': 0x1,
      'mediaUrl': "http://wa.me/+917994489493?text=Hey",
      'sourceUrl': "http://wa.me/+917994489493?text=Hey",
      'showAdAttribution': false
    }
  }
};
message.client.sendMessage(message.jid, zeta, {
  quoted: message
});
}
);
