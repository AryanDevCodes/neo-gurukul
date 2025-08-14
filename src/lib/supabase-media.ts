import { supabase } from '@/integrations/supabase/client';

// Media file upload function
export const uploadMediaFile = async (
  file: File,
  userId: string,
  courseId?: string,
  category: string = 'lecture'
) => {
  try {
    // Create unique filename
    const timestamp = Date.now();
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/${timestamp}.${fileExt}`;
    
    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('media-files')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw uploadError;
    }
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('media-files')
      .getPublicUrl(fileName);
    
    // Save metadata to database
    const mediaData = {
      title: file.name.replace(/\.[^/.]+$/, ''), // Remove extension
      file_url: publicUrl,
      file_type: getFileType(file.type),
      file_size: file.size,
      uploaded_by: userId,
      course_id: courseId,
      category: category,
      tags: extractTagsFromFilename(file.name)
    };
    
    const { data: dbData, error: dbError } = await supabase
      .from('media_files')
      .insert([mediaData])
      .select()
      .single();
    
    if (dbError) {
      console.error('Database error:', dbError);
      // Clean up uploaded file if database insert fails
      await supabase.storage.from('media-files').remove([fileName]);
      throw dbError;
    }
    
    return { data: dbData, fileName };
  } catch (error) {
    console.error('Error uploading media file:', error);
    throw error;
  }
};

// Helper function to determine file type
const getFileType = (mimeType: string): string => {
  if (mimeType.startsWith('video/')) return 'video';
  if (mimeType.startsWith('audio/')) return 'audio';
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType.includes('pdf') || mimeType.includes('epub') || mimeType.includes('mobi')) return 'book';
  return 'document';
};

// Extract tags from filename for better searchability
const extractTagsFromFilename = (filename: string): string[] => {
  const baseName = filename.replace(/\.[^/.]+$/, '').toLowerCase();
  const words = baseName.split(/[-_\s]+/);
  return words.filter(word => word.length > 2);
};

// Fetch media files for a course
export const fetchCourseMedia = async (courseId: string, category?: string) => {
  let query = supabase
    .from('media_files')
    .select(`
      id,
      title,
      description,
      file_url,
      file_type,
      file_size,
      duration,
      thumbnail_url,
      category,
      tags,
      is_public,
      download_allowed,
      created_at,
      uploaded_by
    `)
    .eq('course_id', courseId)
    .order('created_at', { ascending: false });
  
  if (category) {
    query = query.eq('category', category);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching course media:', error);
    throw error;
  }
  
  return data;
};

// Update media progress
export const updateMediaProgress = async (
  userId: string,
  mediaFileId: string,
  progressSeconds: number,
  completed: boolean = false
) => {
  const { data, error } = await supabase
    .from('user_media_progress')
    .upsert({
      user_id: userId,
      media_file_id: mediaFileId,
      progress_seconds: progressSeconds,
      completed: completed,
      last_watched_at: new Date().toISOString()
    })
    .select()
    .single();
  
  if (error) {
    console.error('Error updating media progress:', error);
    throw error;
  }
  
  return data;
};

// Search media files
export const searchMediaFiles = async (
  query: string,
  fileType?: string,
  category?: string,
  limit: number = 20
) => {
  let searchQuery = supabase
    .from('media_files')
    .select(`
      id,
      title,
      description,
      file_url,
      file_type,
      category,
      tags,
      is_public,
      created_at,
      courses(title, category)
    `)
    .or(`title.ilike.%${query}%,description.ilike.%${query}%,tags.cs.{${query}}`)
    .eq('is_public', true)
    .limit(limit);
  
  if (fileType) {
    searchQuery = searchQuery.eq('file_type', fileType);
  }
  
  if (category) {
    searchQuery = searchQuery.eq('category', category);
  }
  
  const { data, error } = await searchQuery;
  
  if (error) {
    console.error('Error searching media files:', error);
    throw error;
  }
  
  return data;
};