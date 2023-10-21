
// JavaScript to toggle the mobile menu
const mobileMenuIcon = document.getElementById('mobileMenuIcon');
const mobileNavContainer = document.getElementById('mobileNavContainer');
const closeButton = document.getElementById('closeButton');
const webDevelopmentOption = document.getElementById('option1');
const softwareDevelopmentOption = document.getElementById('option2');
const webDesignOption = document.getElementById('option3');
const appDevelopmentOption = document.getElementById('option4');
const graphicDesignOption = document.getElementById('option5');
const threedOption = document.getElementById('option6');
const digitalMarketingOption = document.getElementById('option7');
const aiOption = document.getElementById('option8');
const hostingOption = document.getElementById('option9');
const otherOption = document.getElementById('option10');

const websiteOption = document.getElementsByClassName('website');
const webDevOption = 

mobileMenuIcon.addEventListener('click', () => {
  mobileNavContainer.classList.add('active');
});

closeButton.addEventListener('click', () => {
  mobileNavContainer.classList.remove('active');
});

// Close the mobile menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!mobileNavContainer.contains(e.target) && e.target !== mobileMenuIcon) {
    mobileNavContainer.classList.remove('active');
  }
});

//TODO: complete form

webDevelopmentOption.addEventListener("change", function(){
	if (webDevelopmentOption.checked){
		document.getElementById('webDev').style.display = "flex";
		document.getElementById('website').style.display = "inline-block";
	}else{
		document.getElementById('webDev').style.display = "none";
		document.getElementById('website').style.display = "none";
	}
});

softwareDevelopmentOption.addEventListener("change", function(){
	if (softwareDevelopmentOption.checked){
		
	}else{

	}
});

webDesignOption.addEventListener("change", function(){
	if (webDesignOption.checked){
		
	}else{

	}
});

appDevelopmentOption.addEventListener("change", function(){
	if (appDevelopmentOption.checked){
		
	}else{

	}
});

graphicDesignOption.addEventListener("change", function(){
	if (graphicDesignOption.checked){
		document.getElementById('Design').style.display = "inline-block";
		document.getElementById('design').style.display = "flex";

	}else{
		document.getElementById('Design').style.display = "none";
		document.getElementById('design').style.display = "none";

	}
});

digitalMarketingOption.addEventListener("change", function(){
	if (digitalMarketingOption.checked){
		document.getElementById('Digital').style.display = "inline-block";
		document.getElementById('digitalMarketing').style.display = "flex";
		
	}else{
		document.getElementById('Digital').style.display = "none";
		document.getElementById('digitalMarketing').style.display = "none";
	
	}
});

threedOption.addEventListener("change", function(){
	if (threedOption.checked){
		
	}else{

	}
});

aiOption.addEventListener("change", function(){
	if (aiOption.checked){
		document.getElementById('AI').style.display = "inline-block";
		document.getElementById('Ai').style.display = "flex";
	
	}else{
		document.getElementById('AI').style.display = "none";
		document.getElementById('Ai').style.display = "none";
	}
});

hostingOption.addEventListener("change", function(){
	if (hostingOption.checked){
		document.getElementById('Hosting').style.display = "inline-block";
		document.getElementById('hosting').style.display = "flex";
	}else{
		document.getElementById('Hosting').style.display = "none";
		document.getElementById('hosting').style.display = "none";
	}
});

otherOption.addEventListener("change", function(){
	if (otherOption.checked){
		
	}else{

	}
});



