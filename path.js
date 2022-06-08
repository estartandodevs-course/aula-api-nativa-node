const path = require("path");

/*

Linux | Mac
/Users/username/Desktop/folder/file.txt

Windows | Windows Server
C:\Users\username\Desktop\folder\file.txt


*/

const fileParse = path.join(__dirname, "file.txt");

console.clear();

console.log("Join", fileParse);
console.log("Extension", path.parse(fileParse));
console.log("Extension", path.extname(fileParse));
console.log("Dirname", path.dirname(fileParse));
console.log("Basename", path.basename(fileParse));

const file = "/Users/felipe.rosas/PROJETOS/ESTARTANDODEVS/Aula12";

console.log("Navegar antes", path.join(file, "novo.txt"));
console.log("Navegar depois", path.join(file, "..", "..", "..", "novo.txt"));

const pathZoado = "/Users////////////PROJETOS\\ESTARTANDODEVS/Aula12";

console.log("Resolve", path.resolve(pathZoado));
console.log("Relative", path.relative("/Users/felipe.rosas", "/test/file.txt"));
