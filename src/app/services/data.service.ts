import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb(): any {
    const users = [
      { id: 1, loginName: 'Pablo', password: 'admin123'},
      { id: 2, loginName: 'Tom', password: 'admin123'}
    ];
    const products = [
      { id: 1, name: 'Harry Potter\'s Adventure', type: 'Books', description: 'Fantasy'},
      { id: 2, name: 'The Dark Knight', type: 'Books', description: 'Fantasy'},
      { id: 3, name: 'Harry Potter At The Beach', type: 'Books', description: 'Fantasy'},
      { id: 4, name: 'Lord Of The Rings 3D', type: 'Books', description: 'Fantasy'},
      { id: 5, name: 'Lord Of The Rings 4K', type: 'Books', description: 'Fantasy'},
      { id: 6, name: 'FIFA 20', type: 'Games', description: 'Sports'},
      { id: 7, name: 'The Dark Knight', type: 'Games', description: 'Fantasy'},
      { id: 8, name: 'Final Fantasy', type: 'Games', description: 'Fantasy'},
      { id: 9, name: 'Tomb Raider', type: 'Games', description: 'Fantasy'},
      { id: 10, name: 'Lord Of The Rings', type: 'Games', description: 'Fantasy'},
      { id: 11, name: 'Rolling Stones', type: 'Music', description: 'Rock'},
      { id: 12, name: 'Stone Roses', type: 'Music', description: 'Indie'},
      { id: 13, name: 'Oasis', type: 'Music', description: 'Indie'},
      { id: 14, name: 'Blur', type: 'Music', description: 'Indie'},
      { id: 15, name: 'Gomez', type: 'Music', description: 'Alternative'},
      { id: 16, name: 'Mumford & Sons', type: 'Music', description: 'Alternative'},
      { id: 17, name: 'Beck', type: 'Music', description: 'Funk'},
      { id: 18, name: 'C2C', type: 'Music', description: 'Dance'},
      { id: 19, name: 'David Guetta', type: 'Music', description: 'Dance'},
      { id: 20, name: 'RadioHead', type: 'Music', description: 'Rock'},
    ];

    return {users, products};
  }
}
