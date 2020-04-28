import JSZip from 'jszip'

const zipFiles = (files: File[]) => {
  const zipBlob = new JSZip()
  files.forEach((file) => zipBlob.file(file.name, file))
  return zipBlob.generateAsync({ type: 'blob' })
}

export default zipFiles
