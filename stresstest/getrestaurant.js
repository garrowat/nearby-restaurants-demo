import http from 'k6/http';
import { check, sleep } from 'k6';
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.js';
import { Restaurant } from './stressmocker.js';


export const options = {
  rps: 10000,
  stages: [
    { duration: '30s', target: 1 },
    { duration: '30s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 1000 },
  ],
  discardResponseBodies: true,
};

export default () => {
  // GET Test
  const getId = Math.ceil(Math.random * 10000000);
  const res = http.get(`http://localhost:1337/${getId}`);
  check(res, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 200,
  });

  // POST Test
  const restaurant = new Restaurant(Math.ceil((Math.random * 20000000) + 10000001));
  const payload = JSON.stringify(restaurant);
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    tags: {
      name: 'postsNewRestaurant',
    },
  };
  const post = http.post('http://localhost:1337/api/nearby', payload, params);
  check(post, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 200,
  });

  sleep(1);
};
