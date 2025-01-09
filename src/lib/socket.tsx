import io from "socket.io-client"
export const socket = io("https://xogameserver.alicoder.site:443",{
  autoConnect:false,
})

// http://localhost:3000