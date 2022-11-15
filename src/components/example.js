const folder = "../assets/drum-sounds"
const padsObj = {
    'Q': `${folder}/Cev_H2.mp3`,
    'W': `${folder}/Dsc_Oh.mp3`,
    'E': `${folder}/Heater-1.mp3`,
    'A': `${folder}/Heater-2.mp3`,
    'S': `${folder}/Heater-3.mp3`,
    'D': `${folder}/Heater-4_1.mp3`,
    'Z': `${folder}/Heater-6.mp3`,
    'X': `${folder}/Kick_n_Hat.mp3`,
    'C': `${folder}/RP4_KICK_1.mp3`,
  }

  Object.keys(padsObj).forEach((k, i) => {console.log(padsObj[k])})