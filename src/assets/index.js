// Run as Single File With "node index.js"

  const fs = require('fs');

  // Read the Markdown file
  const mdContent = fs.readFileSync('data.md', 'utf8');

  // Define a regular expression pattern to match Markdown tables
  const tableRegex = /\|(.+)\|((\r?\n)(\s*\|.+)+)*/g;

  // Extract all Markdown tables
  const tables = mdContent.match(tableRegex);

  // Initialize an array to hold the JSON objects
  const jsonResult = [];

  // Process each table
  if (tables) {
    tables.forEach(table => {
      const lines = table.trim().split('\n');
      const headers = lines[0].split('|').map(header => header.trim()).filter(Boolean);
      const tableData = [];

      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split('|').map(cell => cell.trim()).filter(Boolean);
        const rowData = {};

        for (let j = 0; j < headers.length; j++) {
          rowData[headers[j]] = row[j];
          
        }
        tableData.push(rowData);
      }

      jsonResult.push(tableData);
    });
  }

  // Convert data to JSON
  const jsonData = JSON.stringify(jsonResult, null, 2);

  // Print the JSON data
  console.log(jsonData);

  // You can also write the JSON data to a file
  fs.writeFileSync('tableData.json', jsonData, 'utf8');
