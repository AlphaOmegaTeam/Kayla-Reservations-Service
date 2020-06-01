import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '1m10s', target: 100 },
  ],
}
export default function() {
  let id = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://localhost:3020/reservations/${id}`);
  check(res, { 'status was 200': r => r.status == 200 });
}