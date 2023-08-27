import axios from "axios";

export async function sendDataToServer(clicks) {
  await axios.post("http://localhost:5000/data", {
    clicks,
  });
}
