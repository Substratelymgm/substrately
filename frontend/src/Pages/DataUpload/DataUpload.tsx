import { useState, ChangeEvent } from 'react';

const DataUpload = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (file) {
            // Handle file upload logic
            console.log('File uploaded:', file);
        } else {
            alert('Please select a file to upload');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Data Upload</h2>
            <input type="file" onChange={handleFileChange} className="mb-4" />
            <button onClick={handleUpload} className="bg-blue-600 text-white py-2 px-4 rounded">
                Upload
            </button>
        </div>
    );
};

export default DataUpload;
