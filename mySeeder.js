const fs = require('fs');
const { Readable } = require('stream')
const faker = require('faker');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const writeStream = fs.createWriteStream('data.csv');

  const seats = () => faker.random.number({
    min: 2,
    max: 10,
  });

  const booked = () => faker.random.number({
    min: 3,
    max: 15,
  });

  let counter = 0;

  const generateData = () => {
    writer.pipe(fs.createWriteStream('data.csv'));
    for(let i = 1; i <= 10000000; i++) {
      let restName = faker.company.companyName();
      writer.write({
        listingId: counter++,
        name: restName,
        booked: booked(),
        '6:00 PM': seats(),
        '6:15 PM': seats(),
        '6:30 PM': seats(),
        '6:45 PM': seats(),
        '7:00 PM': seats(),
        '7:15 PM': seats(),
        '7:30 PM': seats(),
        '7:45 PM': seats(),
        '8:00 PM': seats(),
        '8:15 PM': seats(),
        '8:30 PM': seats(),
      })
    }
    writer.end();
    console.log('done')
  }
  generateData();

  //READABLE

  // class StreamResteraunts extends Readable {
  //   constructor(options) {
  //     super(options);

  //     this.count = 0;
  //   }

    /** should begin pushing data into the read queue using this.push(data) */
    // _read() {
    //     if(this.count === 10000) return;

        // let streamObj = {
        //   listingId: this.count,
        //   name: faker.lorem.word(),
        //   booked: booked(),
        //   '6:00 PM': seats(),
        //   '6:15 PM': seats(),
        //   '6:30 PM': seats(),
        //   '6:45 PM': seats(),
        //   '7:00 PM': seats(),
        //   '7:15 PM': seats(),
        //   '7:30 PM': seats(),
        //   '7:45 PM': seats(),
        //   '8:00 PM': seats(),
        //   '8:15 PM': seats(),
        //   '8:30 PM': seats(),
        // }
        // this.push(JSON.stringify(streamObj) + ', ');
//         this.push(
//           listingId: this.count,
//           name: faker.lorem.word(),
//           booked: booked(),
//           '6:00 PM': seats(),
//           '6:15 PM': seats(),
//           '6:30 PM': seats(),
//           '6:45 PM': seats(),
//           '7:00 PM': seats(),
//           '7:15 PM': seats(),
//           '7:30 PM': seats(),
//           '7:45 PM': seats(),
//           '8:00 PM': seats(),
//           '8:15 PM': seats(),
//           '8:30 PM': seats(),
//         )
//         this.count++;
//     }
// }
// const resteraunts = new StreamResteraunts();
// resteraunts.pipe(writeStream);
