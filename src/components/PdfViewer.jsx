const PdfViewer = ({ file, width = "100%", height = "500px" }) => {
  return (
    <>
      <object data={file} type="application/pdf" width={width} height={height}>
        <p>
          Unable to display PDF file. <a href={file}>Download</a> instead.
        </p>
      </object>
    </>
  );
};

export default PdfViewer;
