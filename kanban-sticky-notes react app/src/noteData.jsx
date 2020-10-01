import {generateHexString} from './hexGenerator';

// const noteData = {
//     columns : [ 
//       {
//         columndId : generateHexString(KEY_LENGTH),
//         columnTitle : "To Do",
//         notesArray : [ 
//           {
//             noteId : generateHexString(KEY_LENGTH),
//             title : "CSS",
//             description : "Fix the UI please."
//           },
//           {
//             noteId : generateHexString(KEY_LENGTH),
//             title : "Javascript",
//             description : "Add drag and drop feature."
//           }
//         ]
//       },
//       {
//         columndId : generateHexString(KEY_LENGTH),
//         columnTitle : "To Buy",
//         notesArray : [ 
//           {
//             noteId : generateHexString(KEY_LENGTH),
//             title : "Webcam",
//             description : "One that will last."
//           },
//           {
//             noteId: generateHexString(KEY_LENGTH),
//             title : "Body Wash",
//             description : "Girl, you ran out."
//           },
//           {
//             noteId : generateHexString(KEY_LENGTH),
//             title : "Pens",
//             description : "Because why not."
//           }
//         ]
//       }
//     ]
//   };

  const noteData = {
    board : [
      {
        id : generateHexString(),
        name: "Board Title"
      }
    ],
    categories : [
      {
        id : generateHexString(),
        name : "In Progress"
      },
      {
        id : generateHexString(),
        name : "Finished"
      }
    ],
    notes : [
      {
        id : generateHexString(),
        category : "In Progress",
        title : "Buy Webcam",
        description : "One that will last."
      },
      {
        id: generateHexString(),
        category : "In Progress",
        title : "Buy Body Wash",
        description : "Girl, you ran out."
      },
      {
        id : generateHexString(),
        category : "In Progress",
        title : "Buy Pens",
        description : 'Sesame snaps cupcake cupcake sesame snaps chocolate jelly beans sweet. Chocolate cake tart pastry danish croissant tootsie roll. Brownie dessert jelly-o cake croissant halvah. Cookie cake brownie topping icing topping gingerbread cupcake. Ice cream powder gummi bears fruitcake lemon drops halvah jelly beans. Jelly beans macaroon macaroon. Tiramisu tootsie roll halvah muffin. Jelly topping oat cake marzipan caramels apple pie. Chocolate chocolate soufflé dragée pastry dragée. Brownie topping cake. Cake tiramisu cake marzipan tart liquorice sweet caramels danish. Dragée dragée tiramisu.Dragée bonbon chupa chups carrot cake muffin cake lollipop. Toffee muffin cotton candy chocolate bar sweet marzipan. Pastry gingerbread fruitcake. Cake gingerbread chocolate cake fruitcake topping sweet roll jelly-o. Toffee icing halvah ice cream pudding marshmallow ice cream oat cake. Oat cake lemon drops ice cream jelly-o. Danish jujubes macaroon ice cream tiramisu pie biscuit powder. Cookie biscuit tootsie roll sweet chocolate candy muffin tiramisu. Wafer sugar plum icing marshmallow dragée cupcake jelly marshmallow apple pie. Marshmallow marzipan cookie. Bonbon pastry carrot cake danish powder gummi bears candy bonbon liquorice. Apple pie cake jelly chocolate bar sweet croissant gummi bears icing. Gingerbread halvah dessert candy lollipop marshmallow sweet lemon drops pudding. Liquorice lemon drops caramels gingerbread wafer chocolate cake pudding candy.Bear claw dragée halvah tart. Tart bonbon pastry jelly-o marshmallow cotton candy pudding jelly tiramisu. Donut marshmallow bear claw jelly toffee. Chocolate halvah oat cake wafer pie pie. Sweet roll wafer bonbon dragée gummies pudding oat cake lollipop biscuit. Carrot cake sweet dragée caramels marshmallow pastry. Caramels cotton candy tiramisu biscuit cookie tart. Cheesecake chupa chups toffee lollipop jelly. Gingerbread ice cream dragée cotton candy carrot cake macaroon gummies dessert chocolate cake. Chocolate bonbon jelly-o apple pie. Oat cake candy canes chupa chups soufflé jelly-o ice cream dragée. Gummies jelly beans tart caramels carrot cake. Fruitcake toffee gummies croissant marshmallow.'
      },
      {
        id : generateHexString(),
        category : "Finished",
        title : "CSS",
        description : "Fix the UI please."
      },
      {
        id : generateHexString(),
        category : "In Progress",
        title : "React Stuff",
        description : "Add drag and drop feature."
      },
      {
        id : generateHexString(),
        category : "In Progress",
        title : "Eat Lunch",
        description : "Delicious slice of bread."
      },
      {
        id : generateHexString(),
        category : "Finished",
        title : "SQL",
        description : "Use workbench."
      },
      {
        id : generateHexString(),
        category : "In Progress",
        title : "More Javascript",
        description : "Add drag and drop feature."
      }
    ]
  }

  export default noteData;