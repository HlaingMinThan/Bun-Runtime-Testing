let bun = Bun.serve({
    port : 3000,
    fetch(req,res) {
        return new Response('hello world')
    }
})

console.log('bun is running on '+bun.port);