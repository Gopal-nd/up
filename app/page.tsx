"use client";
 
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";
 
export default function Home() {
  const [image,setImage] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setImage(res[0].url)
          alert("Upload Completed");

        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />


      <Image src={image??''} height={100} alt="dhih" width={200}/>
    </main>
  );
}