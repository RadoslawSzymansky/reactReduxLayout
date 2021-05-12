import axios from 'axios';

export function fetchName() {

  const response = axios.get('https://swapi.dev/api/people');

  return response;
}


// UZYC FETCHA I COMPONENT STYKED z async / await