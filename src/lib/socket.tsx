import io from "socket.io-client"
export const socket = io("https://xogame.alicoder.site",{
  autoConnect:false,
})

// http://localhost:3000