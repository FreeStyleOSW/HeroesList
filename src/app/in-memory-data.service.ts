import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './heroes/model/hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {id: 11, name: 'Son Goku'},
      {id: 12, name: 'Vegeta'},
      {id: 13, name: 'Krillan'},
      {id: 14, name: 'Picollo'},
      {id: 15, name: 'No. 17'},
      {id: 16, name: 'No. 18'},
      {id: 17, name: 'Frieza'},
      {id: 18, name: 'Son Gohan'},
      {id: 19, name: 'Whis'},
      {id: 20, name: 'Beerus'}
    ];
    return {heroes};
  }
}
