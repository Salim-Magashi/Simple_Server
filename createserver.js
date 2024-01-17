const http=require('http')

const HOSTNAME='localhost'
const PORT=8900

function requestResponse(req, res){
    console.log(req)
    res.writeHead(200)
    res.write('My name is')
    res.end('Salim Nuhu Ali')
}
const createServer=http.createServer(requestResponse)

createServer.listen(PORT, HOSTNAME, ()=>{
    console.log(`This server has started at http://${HOSTNAME}:${PORT}`)
})