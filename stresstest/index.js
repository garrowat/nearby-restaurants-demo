import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10  },
    { duration: '20s', target: 0 },
  ],
};

export default () => {
  const res = http.get('http://localhost:1337/98869589');
  check(res, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
};
