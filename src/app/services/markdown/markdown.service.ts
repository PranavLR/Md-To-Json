import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  parseMarkdownTables(mdContent: string): any[] {
    const tableRegex = /\|(.+)\|((\r?\n)(\s*\|.+)+)*/g;
    const tables = mdContent.match(tableRegex);
    const jsonResult: any[] = [];

    if (tables) {
      tables.forEach(table => {
        const lines = table.trim().split('\n');
        const headers = lines[0].split('|').map(header => header.trim()).filter(Boolean);
        const tableData = [];

        for (let i = 1; i < lines.length; i++) {
          const row = lines[i].split('|').map(cell => cell.trim()).filter(Boolean);
          const rowData: any = {};

          for (let j = 0; j < headers.length; j++) {
            rowData[headers[j]] = row[j];
          }

          tableData.push(rowData);
        }

        jsonResult.push(tableData);
      });
    }

    return jsonResult;
  }
}
