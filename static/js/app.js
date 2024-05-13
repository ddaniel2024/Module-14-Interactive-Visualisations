// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    function findSample(row) {
      return row.id == sample
    };

    let metadataRow = metadata.filter(findSample);

    // Use d3 to select the panel with id of `#sample-metadata`
    let sampleMetadata = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    sampleMetadata.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    metadataKeys = Object.keys(metadataRow[0]);
    metadataValues = Object.values(metadataRow[0]);
    
    for (let i=0; i<metadataKeys.length; i++) {
      sampleMetadata.append("p").text(`${metadataKeys[i].toUpperCase()}: ${metadataValues[i]}`);
    }
  });
}
// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    function findSample(row) {
      return row.id == sample
    };

    let samplesRow = samples.filter(findSample);

    // Get the otu_ids, otu_labels, and sample_values
    let otuIds = samplesRow.map(row => row.otu_ids)[0];
    
    let otuLabels = samplesRow.map(row => row.otu_labels)[0];
    
    let sampleValues = samplesRow.map(row => row.sample_values)[0];

    // Build a Bubble Chart
    let trace1 = {
      x:otuIds,
      y:sampleValues,
      type:"scatter",
      mode:"markers",
      marker:{
        size:sampleValues,
        color:otuIds,
        colorscale:"Earth"
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
    
    // Render the Bubble Chart
    Plotly.newPlot("bubble", trace1Data, layout1);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let sortedOtus = sampleValues.sort((a,b) => b.sampleValues - a.sampleValues).slice(0,10);
    console.log(sortedOtus);

    let trace2 = {
      x:sortedOtus,
      y:otuIds,
      type:"bar",
      orientation:"h"
    };
    
    trace2Data = [trace2];
    
    let layout2 = {
      title:"Top 10 bacteria Cultures Found",
      xaxis : {
        title:"Number of Bacteria"
      }
    };

    // Render the Bar Chart
    Plotly.newPlot("bar", trace2Data, layout2);
    
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i=0; i<names.length; i++) {
      dropdown.append("option").text(names[i]);
    }

    // Get the first sample from the list
    sample = dropdown.property("value");

    // Build charts and metadata panel with the first sample
    buildMetadata(sample);
    buildCharts(sample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  d3.selectAll("#selDataset").on("change", buildMetadata(newSample), buildCharts(newSample));
}

// Initialize the dashboard
init();
