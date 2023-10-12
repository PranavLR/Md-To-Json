import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file/file.service';
import { MarkdownService } from '../services/markdown/markdown.service';

@Component({
  selector: 'app-table-parser',
  templateUrl: './table-parser.component.html',
  styleUrls: ['./table-parser.component.scss']
})
export class TableParserComponent implements OnInit {

  jsonResult!: any[];
  jsonData!: string;

  constructor(private fileService: FileService, private markdownService: MarkdownService) {}

  ngOnInit(): void {
    this.fileService.readMarkdownFile('assets/data.md').subscribe({
      next: (mdContent) => {
        this.jsonResult = this.markdownService.parseMarkdownTables(mdContent);
        this.jsonData = JSON.stringify(this.jsonResult, null, 2);
        console.log(this.jsonData);
  
        // You can also write the JSON data to a file
        // this.fileService.writeJsonFile('assets/tableData.json', this.jsonData).subscribe({
        //   next: () => {
        //     console.log('JSON data written to tableData.json');
        //   },
        // });
      }
    });
  }
}
