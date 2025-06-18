// Why I need this file: To generate CSV files from data arrays, which can be used for exporting data in a structured format.

export const generateCSV = (data: any[]) => {
  const headers = Object.keys(data[0]).join(","); //Explain this line: It extracts the keys from the first object in the array, which will be used as the headers for the CSV file.
  const rows = data.map(row => Object.values(row).join(",")); // Explain this line: It maps each object in the array to a string of its values, joining them with commas to form the rows of the CSV file.
  return `${headers}\n${rows.join("\n")}`; // Explain this line: It combines the headers and rows into a single string, with headers on the first line and each row on a new line, creating the final CSV formatted string.
}; // This function takes an array of objects and converts it into a CSV string format.
// It first extracts the headers from the keys of the first object, then maps each object to a string of values, and finally joins everything into a single CSV formatted string.
