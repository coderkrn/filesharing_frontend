import React, { useRef, useState, useEffect } from 'react'
import { uploadFile } from '../services/api';

export default function Home() {

    const [file, setFile] = useState('');
    const [result, setResult] = useState('');

    const fileInputRef = useRef();
    const uploadClick = () => {
        fileInputRef.current.click();
    }
    console.log(file)

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('name', file.name);
                data.append('file', file);

                let response = await uploadFile(data);
                setResult(response.path);
            }

        }
        getImage()
    }, [file])

    const handleCopy = ()=>{
        navigator.clipboard.writeText(result)
    }
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    {/* Featured */}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Smart File Sharing</h5>
                    <p className="card-text">Upload and share the download link</p>
                    <button onClick={uploadClick}> Upload</button>
                    <input type='file' ref={fileInputRef} onChange={(e) => setFile(e.target.files[0])} style={{ "display": 'none' }} />
                </div>
                <div className="card-footer text-body-secondary">
                    {/* <a rel="noopener" href={result} target='_blank' > {result} </a> */}
                </div>
            </div>
            <div className='container text-center'>
                <label>Share the download link</label>
                <div className='text'>
                    <input type='text' value={result} placeholder='' />
                    <button onClick={handleCopy}><i class="fa-solid fa-copy"></i></button>
                </div>

            </div>
        </>
    )
}
