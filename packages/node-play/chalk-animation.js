
const chalkAnimation = require('chalk-animation')
const inquirer = require('inquirer')

console.log(process.argv)

inquirer
  .prompt([{
    type: 'list',
    name: 'type',
    message: 'Choose an animation type: ',
    choices: [
      'rainbow', 'pulse', 'glitch', 'radar', 'neon', 'karaoke'
    ]
  }])
  .then((answers) => {
    console.log(answers)
    run(answers.type)
  })
  .catch(e => {
    console.error(e)
  })

function run(type = 'rainbow') {
  const str = 'Talking to the moon'

  const rainbow = chalkAnimation[type](str)

  // console.log(rainbow)

  let i = 0;
  setInterval(() => {
    i++;
    
    if (i > 100) {
      i = 0
    }

    rainbow.replace(str + ' ' + i)
  }, 1000);
}

// const str = 'Talking to the moon'

// const rainbow = chalkAnimation.rainbow(str)

// // console.log(rainbow)

// let i = 0;
// setInterval(() => {
//   i++;
  
//   if (i > 100) {
//     i = 0
//   }

//   rainbow.replace(str + i)
// }, 1000);

// chalkAnimation.pulse(str)

// chalkAnimation.glitch(str)

// chalkAnimation.radar(str)

// chalkAnimation.neon(str)

// chalkAnimation.karaoke(str)
