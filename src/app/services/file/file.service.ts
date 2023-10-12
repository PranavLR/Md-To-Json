import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {}

  readMarkdownFile(filename: string): Observable<string> {
    return this.http.get(filename, { responseType: 'text' });
  }

  // writeJsonFile(filename: string, jsonData: string): Observable<string> {
  //   return this.http.put(filename, jsonData, { responseType: 'text' });
  // }
}