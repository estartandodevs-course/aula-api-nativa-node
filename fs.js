const fs = require("fs");

// callback async
// sync

console.clear();

// assíncrona

for (let i = 1; i <= 5; i++) {
  const file = `Async-text-${i}.txt`;
  fs.writeFile(file, "Hello World", (err, out) => {
    console.log(out);
  });
}

// sincrona

for (let i = 1; i <= 5; i++) {
  const file = `sync-text-${i}.txt`;
  const out = fs.writeFileSync(file, "Hello World");
  console.log(out);
}
