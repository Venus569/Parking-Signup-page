import React, { useState } from "react"
import { useDropzone } from "react-dropzone"


export function GSTImageLoader({showing,setShowing,gstno,setGstno,gstpic,setGstpic}) {
  

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      
        acceptedFiles.forEach((file) =>{
            setGstpic(oldArray => [...oldArray,
                Object.assign(file, {preview: URL.createObjectURL(file)})] )
            
            })
      
    },
  })

  const images = gstpic.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview}  alt="preview" />
      </div>
    </div>
  ))


 // console.log(typeof images);

  return (
      <>
      {(showing==4)&&( 
      <div className="container">
        <form onSubmit={(e)=>{
          e.preventDefault();
          setGstno(gstno);
          if(gstpic.length>=1)
           setShowing(showing+1);


      }}>
        <div className="form-group">
          <label htmlFor="gstnumber"><h2>GST number</h2></label>
          <input type="text" id="gstnumber" name="gstnumber" maxlength="15" required="true" value={gstno} onChange={e => setGstno(e.target.value)} />
        </div>
        <h2 className="get-margin">Upload GST photos</h2>
        <h3 className="get-margin">Preview</h3>
        <div className="dropped-images">{images}</div>
         <div className="drop-area">
            <div {...getRootProps()}>
             <input {...getInputProps()} />
             <div>Drop files here atleast 1</div>
           </div>
        </div>
        <button type="submit" >Next</button>
        </form>
       
      
    
    </div>
      )}
    </>
  )
}
