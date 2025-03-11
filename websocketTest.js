let url = "wss://ws.bitstamp.net";

let socket = new WebSocket(url);

socket.onopen((e) => {
  console.log("## Socket Open", e);
});

socket.onmessage((e) => {
  const { data } = e;
  if (data) {
    console.log("## socket message received", data);
  } else {
    console.log("@@ socket message received", e);
  }
});
