// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select ("tbody");
// Function to build table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
  var filters ={};
  function updateFilters(){
     
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#country").property("value");
    let country = d3.select("#state").property("value");
    let shape = d3.select("#shape").property("value");
    console.log(country);
    
    if (date) {
      filters['datetime'] = date
    }
  
    if (city) {
      filters['city'] = city
    }
    
  
    if (country) {
      filters['country'] = country
    }
    
    

    if (state) {
      filters['state'] = state
    } 
    
    
    if (shape) {
      filters['shape'] = shape
    }

    console.log(filters);
    filteredData = tableData;
    
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value)
      console.log(filteredData);
    })
   

     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);