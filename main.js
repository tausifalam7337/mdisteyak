window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-31PPT6CB61');


let isDropHereVisible = false;

window.addEventListener("dragover", function (e) {
  e.preventDefault();
  if (!isDropHereVisible) {
    document.querySelector(".Drop-here").style.display = "block";
    isDropHereVisible = true;
  }
});

window.addEventListener("drop", function (e) {
  e.preventDefault();
  document.querySelector(".Drop-here").style.display = "none";
  isDropHereVisible = false;
  if (e.dataTransfer.files.length > 0) {
    handleFiles(e.dataTransfer.files);
  }
});

window.addEventListener("dragenter", function (e) {
  e.preventDefault();
  if (!isDropHereVisible) {
    document.querySelector(".Drop-here").style.display = "block";
    isDropHereVisible = true;
  }
});

window.addEventListener("dragleave", function (e) {
  e.preventDefault();
  const dropHere = document.querySelector(".Drop-here");
  const rect = dropHere.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;
  const isOutside = x < rect.left || x > rect.right || y < rect.top || y > rect.bottom;
  const isLeftDocument = !document.elementFromPoint(x, y);
  if (isOutside || isLeftDocument) {
    dropHere.style.display = "none";
    isDropHereVisible = false;
  }
  // if (e.dataTransfer.files.length > 0) {
  //   handleFiles(e.dataTransfer.files);
  // }
});
function handleFiles(files) {
      // Handle dropped files here
      console.log(files);
      // Call the function to upload the file
      // uploadImage(files[0]);
      // set this file to the input element of the file input
      document.getElementById("file").files = files;
      uploadImage();
    }