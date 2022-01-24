import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private gridColumnApi;

  private defaultColDef;
  private columnDefs;
  private rowData: [];

  constructor(private http: HttpClient) {
    this.defaultColDef = {
      initialWidth: 100,
      sortable: false,
      resizable: true,
      filter: true
    };
    this.columnDefs = cols;
  }

  cambiar() {
    var cols = [
      { field: " " },
      { field: "12" },
      { field: "24" },
      { field: "36" },
      { field: "48" },
      { field: "60" }
    ];
    this.columnDefs = cols;

    this.rowData = [
      {
        " ": 100000,
        "12": 1.5,
        "24": 1.5,
        "36": 1.5,
        "48": 1.5,
        "60": 2.5
      },
      {
        " ": 200000,
        "12": 1.1,
        "24": 1.1,
        "36": 1.1,
        "48": 1.1,
        "60": 2.5
      },
      {
        " ": 300000,
        "12": 1.6,
        "24": 1.6,
        "36": 1.6,
        "48": 1.6,
        "60": 2.5
      },
      {
        " ": 400000,
        "12": 1.9,
        "24": 1.9,
        "36": 1.9,
        "48": 1.9,
        "60": 2.5
      }
    ];
  } 
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = [
      {
        " ": 100000,
        "tasa1": 1.7,
        "tasa2": 1.7,
        "tasa3": 1.7,
        "tasa4": 1.7
      },
      {
        " ": 100000,
        "tasa1": 1.7,
        "tasa2": 1.7,
        "tasa3": 1.7,
        "tasa4": 1.7
      },
      {
        " ": 100000,
        "tasa1": 1.7,
        "tasa2": 1.7,
        "tasa3": 1.7,
        "tasa4": 1.7
      },
      {
        " ": 100000,
        "tasa1": 1.7,
        "tasa2": 1.7,
        "tasa3": 1.7,
        "tasa4": 1.7
      }
    ];

  }
}
var cols = [
  { field: " " },
  { field: "tasa1" },
  { field: "tasa2" },
  { field: "tasa3" },
  { field: "tasa4" }
];

