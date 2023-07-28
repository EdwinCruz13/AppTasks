const readJsonFile = (Blob) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    console.log(fileReader.onload)


    fileReader.onload = event => {
      if (event.target) {
        resolve(JSON.parse(event.target.result))
      }
    }

    fileReader.onerror = error => reject(error)
    fileReader.readAsText(Blob)
})



const FileInput = () => {
  const onChange = async (event) => {
    if (event.target.files) {
      const parsedData = await readJsonFile(event.target.files[0])

      console.log(parsedData)
    }
  }

  return (
    <input type="file" accept=".png,application/png" onChange={onChange} />
  )
}

export default FileInput