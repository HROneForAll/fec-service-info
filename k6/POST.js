import http from "../../Library/Caches/typescript/2.9/node_modules/@types/k6/http";
import { check, sleep } from "../../Library/Caches/typescript/2.9/node_modules/@types/k6";

export let options = {
  vus: 100,
  duration: "60s"
};

export default function() {
  const body = {
      "\"Air conditioning\"": true,
      "\"Bathroom essentials\"": false,
      "\"Bedroom comforts\"": false,
      "\"Carbon monoxide detector\"": false,
      "\"Coffee maker\"": true,
      "\"Dish washer\"": false,
      "\"Dryer\"": true,
      "\"Hair dryer\"": false,
      "\"Heating\"": true,
      "\"Indoor fireplace\"": true,
      "\"Iron\"": true,
      "\"Kitchen\"": false,
      "\"Pets allowed\"": true,
      "\"Pool\"": false,
      "\"roomname\"": "'roomPosted!'",
      "\"Self check-in\"": true,
      "\"Smoke detector\"": false,
      "\"TV\"": false,
      "\"Washer\"": false,
      "\"Wifi\"": false
};

  check(http.post('http://localhost:4420/rooms', body), {
    'status was 201': (r) => r.status === 201
  });
  // sleep(1);
};
