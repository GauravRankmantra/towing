'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Loader2, UploadCloud, CheckCircle, XCircle, FileText, ImageIcon, Info } from 'lucide-react';

const BulkUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null); // 'success' | 'error'

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== 'application/zip'&&file.type!=='application/x-zip-compressed') {
      setMessageType('error');
      setMessage('Invalid file type. Please select a .zip file.');
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
    setMessage(null); // Clear previous messages
    setMessageType(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessageType('error');
      setMessage('Please select a **.zip** file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      setUploading(true);
      setMessage(null); // Clear messages before new upload

      const res = await axios.post('https://towing-backend.onrender.com/api/v1/bulk/upload-bulk', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessageType('success');
      setMessage(`**Success!** ${res.data.message}`);
      setSelectedFile(null); // Clear selected file on successful upload
    } catch (error) {
      console.error('Upload error:', error); // Log full error for debugging
      setMessageType('error');
      setMessage(
        error.response?.data?.message ||
        '**Upload failed!** Something went wrong while uploading the ZIP file. Please try again.'
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📦 Bulk Upload Companies
      </h1>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8 shadow-sm">
        <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
          <Info className="mr-2 text-blue-600" size={24} /> Important Instructions
        </h2>
        <p className="text-blue-900 mb-4">
          To successfully bulk upload company data, please prepare a **.zip** file
          with the following strict structure and content:
        </p>
        <p className="text-blue-900 mb-4">
          zip size should be less then 40MB
        </p>
        <ul className="list-disc list-inside space-y-3 text-blue-900 ml-4">
          <li>
            <strong className="flex items-center">
              <FileText className="mr-2 text-blue-600" size={18} />
              `bulk_data.xlsx`
            </strong>
            — This Excel spreadsheet must contain all company details, including company name,
            zip code, and image filenames. Ensure all required columns are accurately filled.
          </li>
          <li>
            <strong className="flex items-center">
              <ImageIcon className="mr-2 text-blue-600" size={18} />
              `images/` folder
            </strong>
            — This directory within your ZIP file should contain all company image files.
            The filenames here **must exactly match** the image filenames referenced in
            your `bulk_data.xlsx` file (e.g., `company1.jpg` in Excel must have a
            `company1.jpg` file in the `images/` folder).
          </li>
        </ul>
        <div className="mt-5 p-3 bg-blue-100 rounded-md border border-blue-300">
          <p className="font-medium text-blue-800 mb-2">Example ZIP File Structure:</p>
          <pre className="bg-blue-200 p-3 rounded text-sm text-blue-900 whitespace-pre-wrap">
            {`bulk_upload.zip
├── bulk_data.xlsx
└── images/
    ├── company-a.jpg
    ├── company-b.png
    └── another-company.webp`}
          </pre>
        </div>
      </div>

      <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
        <label htmlFor="zip-upload" className="block text-lg font-medium text-gray-700 mb-3">
          Select Your ZIP File
        </label>
        <div className="flex items-center space-x-4">
          <input
            id="zip-upload"
            type="file"
            accept=".zip"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100 cursor-pointer"
          />
          {selectedFile && (
            <span className="text-sm text-gray-600 flex items-center">
              <FileText className="mr-1 text-gray-400" size={16} />
              {selectedFile.name}
            </span>
          )}
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading || !selectedFile}
          className={`mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-colors duration-200
            ${uploading || !selectedFile
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            }`}
        >
          {uploading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Uploading... Please wait
            </>
          ) : (
            <>
              <UploadCloud size={20} />
              Initiate Upload
            </>
          )}
        </button>

        {message && (
          <div
            className={`mt-6 p-4 rounded-md text-base flex items-center gap-3 transition-opacity duration-300 ${
              messageType === 'success'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            {messageType === 'success' ? (
              <CheckCircle size={20} className="text-green-600" />
            ) : (
              <XCircle size={20} className="text-red-600" />
            )}
            <span dangerouslySetInnerHTML={{ __html: message }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BulkUploadPage;