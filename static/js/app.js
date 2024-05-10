d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
console.log(data);

let metadata = data.metadata;

sample = 940;

function findSample(row) {
  return row.id == sample
}

let testIdRow = metadata.filter(findSample)[0];
console.log(testIdRow);

testIdKeys = Object.keys(testIdRow);
testIdValues = Object.values(testIdRow);

console.log(testIdKeys.length);
console.log(testIdKeys[0]);
console.log(testIdValues[0]);

let sampleMetadata = d3.select("#sample-metadata");

for (let i=0; i<testIdKeys.length; i++) {
  sampleMetadata.append("p").text(`${testIdKeys[i]}: ${testIdValues[i]}`);
}
//////////////////////////////////////////////////////////////
let samples = data.samples;

let samplesMatch = samples.filter(findSample)[0];
console.log(samplesMatch);

let otuIds = samplesMatch.otu_ids;
console.log(otuIds);

let otuLabels = samplesMatch.otu_labels;
console.log(otuLabels);

let sampleValues = samplesMatch.sample_values;
console.log(sampleValues);

let trace1 = {
  x:otuIds,
  y:sampleValues,
  type:"scatter",
  mode:"markers",
  marker:{
    size:sampleValues,
    color:otuIds
  },
  text:otuLabels
};

let layout1 = {
  title:"Bacteria Cultures Per Sample",
  xaxis:{
    title:"OTU ID"
  },
  yaxis:{
    title:"Number of Bacteria"
  }
}

trace1Data = [trace1];

Plotly.newPlot("bubble", trace1Data, layout1);

let trace2 = {
  x:otuIds,
  y:sampleValues,
  type:"bar",
  orientation:"horizontal"
};

trace2Data = [trace2];

let layout2 = {
  title:"Top 10 bacteria Cultures Found",
  yaxis : {
    title:"Number of Bacteria"
  }
};

Plotly.newPlot("bar", trace2Data, layout2);


});""
// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log(data);

    // get the metadata field

    // Filter the metadata for the object with the desired sample number

    // Use d3 to select the panel with id of `#sample-metadata`

    // Use `.html("") to clear any existing metadata

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

  });
}
// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
