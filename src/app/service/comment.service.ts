import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Coments} from "../object/coments";

@Injectable()
export class ComentsService {

  constructor(private http: Http) {
  }

  get(): Promise<Coments[]> {
    return this.http.get(`http://10.0.2.124:8088/art/1/comments`)
      .toPromise()
      .then(response => response.json() as Coments[]);
  }
}