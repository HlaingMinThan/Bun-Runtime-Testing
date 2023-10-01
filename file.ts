// Bun.write("hello.txt", "written by bun");

let file = Bun.file("hello.txt");

console.log(await file.text());
console.log(file.size);
