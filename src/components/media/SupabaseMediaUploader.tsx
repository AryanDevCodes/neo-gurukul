import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  File, 
  Video, 
  Image, 
  BookOpen, 
  Music, 
  FileText,
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';
import { uploadMediaFile } from '@/lib/supabase-media';
import { useAuth } from '@/hooks/useAuth';

interface MediaFile {
  id: string;
  file: File;
  title: string;
  description: string;
  category: string;
  courseId?: string;
  uploadProgress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
}

const SupabaseMediaUploader = () => {
  const { user } = useAuth();
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [defaultCourseId, setDefaultCourseId] = useState<string>('');

  const getFileCategory = (type: string): string => {
    if (type.startsWith('video/')) return 'lecture';
    if (type.startsWith('audio/')) return 'audio';
    if (type.startsWith('image/')) return 'supplementary';
    if (type.includes('pdf') || type.includes('epub') || type.includes('mobi')) return 'reference';
    return 'document';
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('video/')) return Video;
    if (type.startsWith('audio/')) return Music;
    if (type.startsWith('image/')) return Image;
    if (type.includes('pdf') || type.includes('epub') || type.includes('mobi')) return BookOpen;
    return FileText;
  };

  const handleFileSelect = (selectedFiles: FileList) => {
    if (!user) {
      toast.error('Please login to upload files');
      return;
    }

    Array.from(selectedFiles).forEach(file => {
      // Validate file size (100MB limit)
      if (file.size > 100 * 1024 * 1024) {
        toast.error(`File ${file.name} is too large. Maximum size is 100MB.`);
        return;
      }

      const newFile: MediaFile = {
        id: crypto.randomUUID(),
        file,
        title: file.name.replace(/\.[^/.]+$/, ''),
        description: '',
        category: getFileCategory(file.type),
        courseId: defaultCourseId,
        uploadProgress: 0,
        status: 'pending'
      };
      
      setFiles(prev => [...prev, newFile]);
    });
  };

  const updateFile = (id: string, updates: Partial<MediaFile>) => {
    setFiles(prev => prev.map(file => 
      file.id === id ? { ...file, ...updates } : file
    ));
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const uploadFile = async (fileData: MediaFile) => {
    if (!user) {
      toast.error('User not authenticated');
      return;
    }

    updateFile(fileData.id, { status: 'uploading', uploadProgress: 0 });

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        updateFile(fileData.id, { 
          uploadProgress: Math.min(fileData.uploadProgress + Math.random() * 20, 90) 
        });
      }, 500);

      const result = await uploadMediaFile(
        fileData.file,
        user.id,
        fileData.courseId || undefined,
        fileData.category
      );

      clearInterval(progressInterval);
      
      updateFile(fileData.id, { 
        status: 'completed', 
        uploadProgress: 100 
      });

      toast.success(`${fileData.title} uploaded successfully!`);
      console.log('Upload result:', result);

    } catch (error) {
      console.error('Upload error:', error);
      updateFile(fileData.id, { 
        status: 'error', 
        error: error instanceof Error ? error.message : 'Upload failed' 
      });
      toast.error(`Failed to upload ${fileData.title}`);
    }
  };

  const uploadAll = () => {
    const pendingFiles = files.filter(f => f.status === 'pending');
    pendingFiles.forEach(uploadFile);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  }, [defaultCourseId]);

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'error': return <AlertCircle className="w-5 h-5 text-red-600" />;
      default: return null;
    }
  };

  if (!user) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">Authentication Required</h3>
          <p className="text-gray-600 mb-4">Please login to upload media files.</p>
          <Button onClick={() => window.location.href = '/login'}>
            Go to Login
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Upload Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Configuration</CardTitle>
          <CardDescription>Set default settings for your uploads</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="default-course">Default Course (Optional)</Label>
            <Input
              id="default-course"
              placeholder="Enter course ID or leave empty for general uploads"
              value={defaultCourseId}
              onChange={(e) => setDefaultCourseId(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

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
          <div className="text-sm text-gray-500 mb-4 text-center">
            <p><strong>Supported formats:</strong></p>
            <p>📹 Videos: MP4, WebM, AVI (max 100MB)</p>
            <p>🎵 Audio: MP3, WAV, OGG (max 100MB)</p>
            <p>🖼️ Images: JPG, PNG, GIF (max 10MB)</p>
            <p>📚 Documents: PDF, EPUB, MOBI, DOCX (max 50MB)</p>
          </div>
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
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upload Queue ({files.length})</CardTitle>
              <CardDescription>Review and upload your files</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={uploadAll}
                disabled={!files.some(f => f.status === 'pending')}
                className="bg-green-600 hover:bg-green-700"
              >
                Upload All
              </Button>
              <Button 
                variant="outline"
                onClick={() => setFiles([])}
              >
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {files.map((file) => {
                const IconComponent = getFileIcon(file.file.type);
                return (
                  <div key={file.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Input
                            value={file.title}
                            onChange={(e) => updateFile(file.id, { title: e.target.value })}
                            className="font-medium"
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            {formatFileSize(file.file.size)} • {file.file.type}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(file.status)}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeFile(file.id)}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      <Textarea
                        placeholder="Add a description (optional)"
                        value={file.description}
                        onChange={(e) => updateFile(file.id, { description: e.target.value })}
                        className="text-sm"
                        rows={2}
                      />
                      
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <Label className="text-xs">Category</Label>
                          <Select 
                            value={file.category} 
                            onValueChange={(value) => updateFile(file.id, { category: value })}
                          >
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lecture">📹 Lecture</SelectItem>
                              <SelectItem value="supplementary">📎 Supplementary</SelectItem>
                              <SelectItem value="assessment">📝 Assessment</SelectItem>
                              <SelectItem value="reference">📚 Reference</SelectItem>
                              <SelectItem value="audio">🎵 Audio</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex-1">
                          <Label className="text-xs">Course ID (Optional)</Label>
                          <Input
                            value={file.courseId || ''}
                            onChange={(e) => updateFile(file.id, { courseId: e.target.value })}
                            placeholder="Course ID"
                            className="h-8"
                          />
                        </div>
                      </div>
                      
                      {file.status === 'uploading' && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Uploading...</span>
                            <span>{Math.round(file.uploadProgress)}%</span>
                          </div>
                          <Progress value={file.uploadProgress} className="h-2" />
                        </div>
                      )}
                      
                      {file.status === 'error' && (
                        <div className="text-red-600 text-sm">{file.error}</div>
                      )}
                      
                      <div className="flex gap-2">
                        {file.status === 'pending' && (
                          <Button 
                            size="sm" 
                            onClick={() => uploadFile(file)}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            Upload
                          </Button>
                        )}
                        {file.status === 'completed' && (
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            ✅ Uploaded
                          </Badge>
                        )}
                      </div>
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

export default SupabaseMediaUploader;