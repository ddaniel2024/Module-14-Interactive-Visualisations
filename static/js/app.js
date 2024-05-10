d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
console.log(data);

let metadata = data.metadata;

sample = 940;

function sampleMatch(row) {
  return row.id == sample
}

let match = metadata.filter(sampleMatch)[0];
console.log(match);

let sampleMetadata = d3.select("#sample-metadata");
sampleMetadata.append("p").text(`ID: ${match.id}`);
sampleMetadata.append("p").text(`ETHNICITY: ${match.ethnicity}`);
sampleMetadata.append("p").text(`GENDER: ${match.gender}`);
sampleMetadata.append("p").text(`AGE: ${match.age}`);
sampleMetadata.append("p").text(`LOCATION: ${match.location}`);
sampleMetadata.append("p").text(`BBTYPE: ${match.bbtype}`);
sampleMetadata.append("p").text(`WFREQ: ${match.wfreq}`);
console.log(sampleMetadata);

let samples = data.samples;

let samplesMatch = samples.filter(sampleMatch)[0];
console.log(samplesMatch);

let otuIds = samplesMatch.otu_ids;
console.log(otuIds);

let otuLabels = samplesMatch.otu_labels;
console.log(otuLabels);

let sampleValues = samplesMatch.sample_values;
console.log(sampleValues);

});
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
