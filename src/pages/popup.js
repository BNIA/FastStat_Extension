const valueSelect = document.querySelector('#indicator-select');
const textareaElement = document.querySelector('#result-textarea');
const saveButton = document.querySelector('#query-button');
const categorySelector = document.querySelector('#category-select');

async function sendQuery() {
    textareaElement.value = '';
    const url = `https://services1.arcgis.com/mVFRs7NF4iFitgbY/ArcGIS/rest/services/${valueSelect.value}/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&returnCentroid=false&f=pgeojson`;
    const response = await fetch(url);
    const result = await response.json();
	const geojData = JSON.stringify(result)
    textareaElement.value = geojData
	
	// Lets make a map now
    // draw a map of atlanta
    var map = L.map('map').setView([39, -76], 14.5);
    L.esri.basemapLayer('Topographic').addTo(map);
	
	
	
	
}
async function dropdownClicked() {
    textareaElement.value = " DROPDOWN: ";	
	// This retrieves all the children from the indicator dropdown in array form.
	let children = Array.from(valueSelect.children)
	// Use a Terenary Operator to conditionally hide children not matching our category value.
	children.map( 
	  child => { 
	    child.className == this.value ? child.style.display = "block" : child.style.display = "none" 
	  } 
	)
}

async function init() {
    saveButton.addEventListener('click', sendQuery);
    categorySelector.addEventListener('click', dropdownClicked);
}

init();