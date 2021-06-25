import './DragDropFeature.css'
import Dropzone from 'react-dropzone-uploader'

const DragDropFeature = () => {
  
  // Upload Parameter für DB eintrag
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // Momentaner Status
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // Handler für die Daten, welche übergeben wurden
  // TODO: Verbindung zw. hier und Absenden Knopf herstellen
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      accept="application/pdf"
      inputContent="Bewegen Sie Dateien in dieses Feld (Drag and Drop)"
    />
  )
}

export default DragDropFeature;