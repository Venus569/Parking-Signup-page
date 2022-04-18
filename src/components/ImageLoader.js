import React, { useState } from "react"
import { useDropzone } from "react-dropzone"


export function ImageLoader({showing,setShowing,files, setFiles}) {
  

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      
        acceptedFiles.forEach((file) =>{
            setFiles(oldArray => [...oldArray,
                Object.assign(file, {preview: URL.createObjectURL(file)})] )
            
            })
      
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview}  alt="preview" />
      </div>
    </div>
  ))


  //console.log(typeof images);

  return (
      <>
      {(showing==3)&&( 
      <div className="container">
           <form onSubmit={(e)=>{
          e.preventDefault();
         
          if(files.length>=1)
          setShowing(showing+1)


      }}>
        <h1>Upload photos</h1>
        <h3>Preview</h3>
        <div className="dropped-images">{images}</div>
         <div className="drop-area">
            <div {...getRootProps()}>
             <input {...getInputProps()} />
             <div >Drop files here atleast 1</div>
           </div>
        </div>
        <button type="submit" >Next</button>
        </form>
      
    
    </div>
      )}
    </>
  )
}
