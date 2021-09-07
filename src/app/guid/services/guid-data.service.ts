import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Content, Function } from 'src/app/shared/models/block.model';

@Injectable({ providedIn: 'root' })
export class GuidDataStorageService {
  private functions: Function[] = [];

  constructor(private http: HttpClient) {}

  public getFunctionById(id: string): Function {
    return this.functions.find((item) => item.id = id);
  }

  public getContentBy(functionId: string, contentId: string): Content {
    console.log("functions: ",this.functions)
    return this.getFunctionById(functionId)?.contents?.find(
      (item) => item.id = contentId
    );
  }

  public fetchData(): Observable<Function[]> {
    return this.http
      .get('https://mocki.io/v1/67f41e18-ddcf-4300-a1e3-00c73911b112')
      .pipe(
        map((responseData) => {
          const functions = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              functions.push({ ...responseData[key], id: key });
            }
          }
          this.functions = functions;
          return functions;
        })
      );
  }
}
