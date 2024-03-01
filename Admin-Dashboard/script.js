
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('hidden');
}

/* pop up*/
document.getElementById("addVendorBtn").addEventListener("click", function() {
  document.getElementById("popupBox").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("popupBox").style.display = "none";
});

document.getElementById("vendorForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  // Here you can add code to handle form submission, like sending data to a server
  alert("Vendor registered successfully!");
  document.getElementById("popupBox").style.display = "none";
});
