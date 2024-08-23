function generateQRCode() {
  let text = document.getElementById("text-input").value;
  let qrCodeContainer = document.getElementById("qrCode");

  // Clear previous QR code if any
  qrCodeContainer.innerHTML = "";

  // Generating QR code
  let qrCode = new QRCode(qrCodeContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Download and share buttons
  document.getElementById("download-btn").style.display = "inline-block";
}

function downloadQRCode() {
  let qrCodeContainer = document
    .getElementById("qrCode")
    .getElementsByTagName("canvas")[0];
  let dataURL = qrCodeContainer.toDataURL("image/png");

  let link = document.createElement("a");
  link.href = dataURL;
  link.download = "QRCode.png";
  link.click();
}
