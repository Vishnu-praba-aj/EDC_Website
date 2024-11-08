// Timeline data as an array of objects
const timelineData = [
  { year: "2019", eventName: "Event name.", eventData: "Event data ." },
  { year: "2020", eventName: "Event name.", eventData: "Event data ." },
  { year: "2021", eventName: "Event name.", eventData: "Event data ." },
  { year: "2022", eventName: "Event name.", eventData: "Event data ." },
  { year: "2023", eventName: "Event name.", eventData: "Event data ." },
  { year: "2024", eventName: "Event name.", eventData: "Event data ." },
];

// Function to create the timeline dynamically
function createTimeline() {
  // Create the main timeline container
  const timelineContainer = document.createElement("div");
  timelineContainer.className = "timeline";
  
  // Loop through each timeline entry
  timelineData.forEach((item, index) => {
    // Create a container for each event
    const containerDiv = document.createElement("div");
    containerDiv.className = `container ${index % 2 === 0 ? 'left' : 'right'}`; // Alternate left/right classes

    // Create the content container
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";

    // Year heading
    const yearHeading = document.createElement("h2");
    yearHeading.textContent = item.year;

    // Event name div
    const eventDiv = document.createElement("div");
    eventDiv.className = "myDIV";
    eventDiv.textContent = item.eventName;

    // Event data div (initially hidden)
    const eventDataDiv = document.createElement("div");
    eventDataDiv.className = "hide";
    eventDataDiv.textContent = item.eventData;

    // Append elements in the structure
    contentDiv.appendChild(yearHeading);
    contentDiv.appendChild(eventDiv);
    contentDiv.appendChild(eventDataDiv);
    containerDiv.appendChild(contentDiv);
    timelineContainer.appendChild(containerDiv);
  });

  // Append the full timeline to the body
  document.body.appendChild(timelineContainer);
}

// Call the function to create the timeline on page load
document.addEventListener("DOMContentLoaded", createTimeline);
