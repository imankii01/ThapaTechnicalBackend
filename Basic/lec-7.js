// Asynchronus File system cor moduels

const fs = require("fs");

fs.writeFile("asynchronus.txt", "today is awesome day  :) ", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is created successfully");
  }
});
// we passs them a function as an arguments ---a callback --> that  get called wehn that task completed
/*
The callback has an argument that tells you whether the opearton completed successfully
Now we need to say what to do when fs.wrtieFile
has completed(evern if it's nothing) 
,and start checking the errors 
*/