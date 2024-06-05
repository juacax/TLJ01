import http from "k6/http";
import { sleep } from "k6";
export const options = {
  stages: [
    { target: 5, duration: "10s" },
    { target: 10, duration: "5s" },
    { target: 10, duration: "15s" },
    { target: 100, duration: "10s" },
    { target: 100, duration: "10s" },
    { target: 1000, duration: "5s" },
    { target: 1000, duration: "15s" },
    { target: 5, duration: "10s" }
  ]
};
export default function () {
  http.get("http://test.k6.io");
  sleep(1);
}
