const KEY_LENGTH = 10;

function generateHexString(length) {
  var ret = "";
  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0,length);
}

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
    categories : [

      {
        categoryId : generateHexString(KEY_LENGTH),
        name : "In Progress"
      },
      {
        categoryId : generateHexString(KEY_LENGTH),
        name : "Finished"
      }
    ],
    notes : [
      {
        noteId : generateHexString(KEY_LENGTH),
        category : "In Progress",
        title : "Buy Webcam",
        description : "One that will last."
      },
      {
        noteId: generateHexString(KEY_LENGTH),
        category : "In Progress",
        title : "Buy Body Wash",
        description : "Girl, you ran out."
      },
      {
        noteId : generateHexString(KEY_LENGTH),
        category : "In Progress",
        title : "Buy Pens",
        description : "Because why not."
      },
      {
        noteId : generateHexString(KEY_LENGTH),
        category : "Finished",
        title : "CSS",
        description : "Fix the UI please."
      },
      {
        noteId : generateHexString(KEY_LENGTH),
        category : "Not Start",
        title : "Javascript",
        description : "Add drag and drop feature."
      },
      {
        noteId : generateHexString(KEY_LENGTH),
        category : "In Progress",
        title : "Eat Lunch",
        description : "Delicious slice of bread."
      },
      {
        noteId : generateHexString(KEY_LENGTH),
        category : "Finished",
        title : "SQL",
        description : "Use workbench."
      },
      {
        noteId : generateHexString(KEY_LENGTH),
        category : "In Progress",
        title : "More Javascript",
        description : "Add drag and drop feature."
      }
    ]
  }

  export default noteData;