import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WikiService {
  wikipediaData;
  wikipediaUrl = "https://es.wikipedia.org/w/api.php?action=opensearch&search=";
  titleArray = [];
  snipetArray = [];
  urlArray = [];

  constructor(private http: HttpClient) {}

  searchFor(text) {
    console.log("Direccion a: " + this.wikipediaUrl + text);
    this.http
      .get(this.wikipediaUrl + text)
      .toPromise()
      .then(data => {
        this.wikipediaData = data;
        console.log(this.wikipediaData);
        this.processDataToArray();
      });
  }

  processDataToArray() {
    for (let item of this.wikipediaData[1]) {
      console.log(item);
    }
  }
}
