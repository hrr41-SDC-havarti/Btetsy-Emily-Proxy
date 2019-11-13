import http from "k6/http";
import { check } from "k6";

export let options = {
  duration: '2m',
  vus: 10,
  rps: 10000
}

export default function() {
   var random = Math.floor(Math.random()*10000000);
   var res = http.get(`http://localhost:4321/${random}`);
   check(res, {
    "is status 200": (r) => r.status === 200
  });
};