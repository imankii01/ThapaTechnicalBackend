const fs = require("fs");
const path = require("path");
// fs.mkdirSync("Crud");
for (let i = 0; i < 10; i++) {
  //   fs.writeFileSync(
  //     "Crud/bio" + i + "." + "txt",
  //     `myname is ${i} ,i am a stakc developer and i intrested in cyber security`
  //   );
  //   fs.appendFileSync(
  //     "Crud/bio" + i + "." + "txt",
  //     `append function aadded`
  //   );
  const data = fs.readFileSync("Crud/bio" + i + "." + "txt").data;
  const main = data.toString();
  console.log(main);
//   fs.writeSync("Crud/buffer.txt", `${main}`);
}
