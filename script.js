function generateQRCode() {
  let text = document.getElementById("text-input").value;
  let qrCodeContainer = document.getElementById("qrCode");

  qrCodeContainer.innerHTML = "";

  let qrCode = new QRCode(qrCodeContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById("download-btn").style.display = "inline-block";
}

function downloadQRCode() {
  let qrCodeContainer = document
    .getElementById("qrCode")
    .getElementsByTagName("canvas")[0];
  const padding = 10;
  const newCanvas = document.createElement("canvas");
  newCanvas.width = qrCodeContainer.width + padding * 2;
  newCanvas.height = qrCodeContainer.height + padding * 2;
  const context = newCanvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, newCanvas.width, newCanvas.height);

  context.drawImage(qrCodeContainer, padding, padding);

  let filename = prompt(
    "Enter the filename for the QR code (without extension):",
    "QRCode"
  );

  if (!filename) {
    filename = "QRCode";
  }

  let newDataURL = newCanvas.toDataURL("image/png");
  let link = document.createElement("a");
  link.href = newDataURL;
  link.download = `${filename}.png`;
  link.click();
}
