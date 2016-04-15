// property or element JavaScript detection with optional Polyfill

if (Modernizr.picture) {
  // supported
  console.log("Picture element supported");
} else {
  // not-supported
  console.log("Picture element not supported");
}

$.getScript("picturefill.min.js");