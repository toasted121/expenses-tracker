import * as firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyAcYvG4ByeNqYuHddjnEmzPJahlEW9G-VI",
    authDomain: "expensify-59722.firebaseapp.com",
    databaseURL: "https://expensify-59722.firebaseio.com",
    projectId: "expensify-59722",
    storageBucket: "expensify-59722.appspot.com",
    messagingSenderId: "254368579493",
    appId: "1:254368579493:web:bf3452b63e7f275985724c"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// const onChildChange = database.ref('expenses').on('child_changed', (snapshot, key) => {
//   // const expenses = [];
  
//   // snapshot.forEach((childSnap) => {
//   //   expenses.push({
//   //     id: childSnap.key,
//   //     ...childSnap.val()
//   //   });
//   // });

//   console.log('Key: ',key,' snapshot: ',snapshot.val());
// });


// const onChildAdded = database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(' Snapshot: ',snapshot.val());
// });


//reading from the database
// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
  
//   snapshot.forEach((childSnap) => {
//     expenses.push({
//       id: childSnap.key,
//       ...childSnap.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnap) => {
//       expenses.push({
//         id: childSnap.key,
//         ...childSnap.val()
//       })
//     });

//     console.log(expenses);
//   });
  

//database.ref().set(null)

// database.ref('expenses').push({
//   description: 'Rent',
//   amount: 232300,
//   createdAt: 123123,
//   note: 'paid'
// });


// const firebaseNotes = {
//   notes: {
//     apoijsdf: {
//       title: 'sdfjewe;',
//       body: 'asdfsdf'
//     }
//   }
// };

// const notes = [{
//   id:'12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id:'1241224',
//   title: ' Second note',
//   body:"not note note"
// }];


// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(` ${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// },3500);

// setTimeout(() => {
//   database.ref().off();
// },7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// },10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val())
//   }).catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Dimo',
//   age: 38,
//   stressLevel: 6,
//   isEmployed: false,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Sydney',
//     country: 'Australia'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e)
// });

// setTimeout(() => {
//   database.ref('name').set('Dennis')
// }, 2000)

// database.ref().update({
//   stressLevel: 9,
//   'job/company' : 'Amazon',
//   'location/city' : 'Seatle'
// }).then(() => {
//   console.log('Update complete');
// }).catch((e) => {
//   console.log('Update error: ', e)
// });

// database.ref('isEmployed').remove()
//   .then(() => {
//   console.log('Remove succesful');
// }).catch((e) => {
//   console.log('Remove failed');
// });
