export const downloadURI = (uri, name) => {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

export const downloadPDF = () => {
  downloadURI('/pdfs/test.pdf', 'editedPdf.pdf');
}
