"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileIcon, UploadIcon, CheckCircleIcon, XIcon } from "lucide-react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadSuccess(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      setUploadSuccess(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Upload Medical Record</h1>

        <Card className="p-6">
          <div className="mb-6">
            <Label htmlFor="file">Select File</Label>
            <div className="mt-2">
              <Input
                id="file"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
              />
              <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => document.getElementById("file")?.click()}>
                <UploadIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, JPG or PNG (max. 10MB)
                </p>
              </div>
            </div>
          </div>

          {file && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Selected File</h2>
              <div className="bg-secondary p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileIcon className="h-4 w-4" />
                  <span>{file.name}</span>
                </div>
                <button
                  onClick={() => setFile(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {uploadSuccess ? (
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <h2 className="text-xl font-semibold mb-1">Upload Successful!</h2>
              <p className="text-muted-foreground mb-4">
                Your file has been securely uploaded and encrypted.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setFile(null);
                  setUploadSuccess(false);
                }}
              >
                Upload Another File
              </Button>
            </div>
          ) : (
            <Button
              className="w-full"
              disabled={!file || uploading}
              onClick={handleUpload}
            >
              {uploading ? "Uploading..." : "Upload File"}
            </Button>
          )}
        </Card>
      </div>
    </main>
  );
}