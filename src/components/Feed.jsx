// import { useState, useEffect } from "react";

// export default function Feed() {
//   const streams = ["S:BBO:AAPL", "C:T:BTC-USD"];
//   const token = "P7cPwxmkTjv9YMNK";
//   const url = `wss://ws.yuzu.dev/ws?token=${token}&streams=${streams.join(
//     ","
//   )}`;

//   const [socket, setSocket] = useState(new WebSocket(url));
//   const [socketReady, setSocketReady] = useState(false);
//   const [message, setMessage] = useState({});

//   useEffect(() => {
//     socket.onopen = (event) => {
//       setSocketReady(true);
//     };

//     socket.onmessage = (event) => {
//       setMessage(JSON.parse(event.data));
//     };

//     socket.onclose = (event) => {
//     //   setSocketReady(false);
//       setTimeout(() => {
//         setSocket(new WebSocket(url));
//       }, 1000);
//     };

//     // return () => {
//     //   socket.close();
//     // };
//   }, [socket]);

//   if(!socketReady){
//     return <h1>Could not connect to server retrying...</h1>
//   } else if (!message) {
//     return <h1>Waiting for message from server...</h1>
//   } else {
//     return <div>{message?.price || message?.ask?.price}</div>
//   }
// }

// // socket.addEventListener("open", () => {
// //   console.log("Connected");
// // });

// // socket.addEventListener("message", (event) => {
// //     console.log(JSON.parse(event.data));
// //     setPrice(JSON.parse(event.data).price);
// //   });
