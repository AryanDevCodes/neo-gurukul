import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, File, Video, Image, BookOpen, Music, FileText } from 'lucide-react';
import { toast } from 'sonner';

interface MediaFile {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadProgress: number;
  category: 'video' | 'audio' | 'image' | 'document' | 'book';
}

const MediaUploader = () => {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const getFileCategory = (type: string): 'video' | 'audio' | 'image' | 'document' | 'book' => {
    if (type.startsWith('video/')) return 'video';
    if (type.startsWith('audio/')) return 'audio';
    if (type.startsWith('image/')) return 'image';
    if (type.includes('pdf') || type.includes('epub') || type.includes('mobi')) return 'book';
    return 'document';
  };

  const getFileIcon = (category: string) => {
    switch (category) {
      case 'video': return Video;
      case 'audio': return Music;
      case 'image': return Image;
      case 'book': return BookOpen;
      default: return FileText;
    }
  };

  const simulateUpload = useCallback((fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        toast.success('File uploaded successfully!');
      }
      
      setFiles(prev => prev.map(file => 
        file.id === fileId ? { ...file, uploadProgress: progress } : file
      ));
    }, 500);
  }, []);

  const handleFileSelect = (selectedFiles: FileList) => {
    Array.from(selectedFiles).forEach(file => {
      const newFile: MediaFile = {
        id: crypto.randomUUID(),
        name: file.name,
        type: file.type,
        size: file.size,
        url: URL.createObjectURL(file),
        uploadProgress: 0,
        category: getFileCategory(file.type)
      };
      
      setFiles(prev => [...prev, newFile]);
      simulateUpload(newFile.id);
    });
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    handleFileSelect(droppedFiles);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card 
        className={`border-2 border-dashed transition-all duration-300 ${
          isDragging 
            ? 'border-primary bg-primary/5 scale-105' 
            : 'border-gray-300 hover:border-primary/50'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Upload className={`w-12 h-12 mb-4 ${isDragging ? 'text-primary animate-bounce' : 'text-gray-400'}`} />
          <h3 className="text-lg font-semibold mb-2">Upload Learning Materials</h3>
          <p className="text-gray-600 text-center mb-4">
            Drag and drop your files here, or click to browse
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Supports: Videos (MP4, WebM), Audio (MP3, WAV), Images (JPG, PNG), Documents (PDF), Books (EPUB, MOBI)
          </p>
          <Button 
            onClick={() => document.getElementById('file-input')?.click()}
            className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600"
          >
            Choose Files
          </Button>
          <input
            id="file-input"
            type="file"
            multiple
            className="hidden"
            accept="video/*,audio/*,image/*,.pdf,.epub,.mobi,application/*"
            onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
          />
        </CardContent>
      </Card>

      {/* File List */}
      {files.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Files ({files.length})</CardTitle>
            <CardDescription>Manage your learning materials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {files.map((file) => {
                const IconComponent = getFileIcon(file.category);
                return (
                  <div key={file.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className={`p-2 rounded-lg ${
                      file.category === 'video' ? 'bg-blue-100 text-blue-600' :
                      file.category === 'audio' ? 'bg-purple-100 text-purple-600' :
                      file.category === 'image' ? 'bg-green-100 text-green-600' :
                      file.category === 'book' ? 'bg-orange-100 text-orange-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent size={20} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)} • {file.category}
                      </p>
                      {file.uploadProgress < 100 && (
                        <Progress value={file.uploadProgress} className="mt-2 h-2" />
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      {file.uploadProgress === 100 && (
                        <>
                          <Button size="sm" variant="outline">Preview</Button>
                          <Button size="sm" variant="outline">Edit</Button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MediaUploader;