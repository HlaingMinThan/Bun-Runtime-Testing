let bun = Bun.serve({
    port : 3000,
    fetch(req,res) {
        let url = new URL(req.url);
        if(url.pathname === '/'){
            return new Response('Home Page')
        }
        if(url.pathname === '/about'){
            return new Response('about Page')
        }
        return new Response('404 Page')
    }
})

console.log('bun is running on '+bun.port);