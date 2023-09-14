import * as csv from 'csv-parse';
import fs from 'fs';

let sum = 0;

fs.createReadStream("transaction.csv")
    .pipe(csv.parse({dekimiter:","}))
    .on("data", function(row) {
        sum += parseFloat(row[1]);
    })
    .on("end", function() {
        console.log(sum);
    })