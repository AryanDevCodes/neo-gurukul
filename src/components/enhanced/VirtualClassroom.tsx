import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Users, 
  MessageSquare, 
  Share2, 
  Settings,
  Monitor,
  Hand,
  BookOpen,
  FileText,
  Download,
  Upload
} from 'lucide-react';

interface Participant {
  id: string;
  name: string;
  avatar?: string;
  role: 'teacher' | 'student';
  isVideoOn: boolean;
  isAudioOn: boolean;
  isHandRaised: boolean;
}

interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: Date;
  type: 'text' | 'file' | 'quiz';
}

interface ClassResource {
  id: string;
  name: string;
  type: 'pdf' | 'video' | 'audio' | 'image' | 'document';
  size: string;
  uploadedBy: string;
  uploadedAt: Date;
}

const VirtualClassroom = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [currentView, setCurrentView] = useState<'main' | 'chat' | 'participants' | 'resources'>('main');
  const [chatMessage, setChatMessage] = useState('');

  const [participants] = useState<Participant[]>([
    {
      id: '1',
      name: 'Guru Sharma',
      role: 'teacher',
      isVideoOn: true,
      isAudioOn: true,
      isHandRaised: false,
      avatar: '/api/placeholder/32/32'
    },
    {
      id: '2',
      name: 'Arjun Kumar',
      role: 'student',
      isVideoOn: true,
      isAudioOn: false,
      isHandRaised: true,
      avatar: '/api/placeholder/32/32'
    },
    {
      id: '3',
      name: 'Priya Patel',
      role: 'student',
      isVideoOn: false,
      isAudioOn: true,
      isHandRaised: false,
      avatar: '/api/placeholder/32/32'
    },
    {
      id: '4',
      name: 'Rahul Singh',
      role: 'student',
      isVideoOn: true,
      isAudioOn: true,
      isHandRaised: false,
      avatar: '/api/placeholder/32/32'
    }
  ]);

  const [chatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      senderId: '1',
      senderName: 'Guru Sharma',
      message: 'Welcome to today\'s Sanskrit lesson on Bhagavad Gita!',
      timestamp: new Date(Date.now() - 300000),
      type: 'text'
    },
    {
      id: '2',
      senderId: '2',
      senderName: 'Arjun Kumar',
      message: 'Thank you, Guruji. I have a question about the pronunciation.',
      timestamp: new Date(Date.now() - 240000),
      type: 'text'
    },
    {
      id: '3',
      senderId: '1',
      senderName: 'Guru Sharma',
      message: 'Excellent question! Let me share the pronunciation guide.',
      timestamp: new Date(Date.now() - 180000),
      type: 'text'
    }
  ]);

  const [resources] = useState<ClassResource[]>([
    {
      id: '1',
      name: 'Bhagavad Gita Chapter 2 - Sanskrit Text',
      type: 'pdf',
      size: '2.4 MB',
      uploadedBy: 'Guru Sharma',
      uploadedAt: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      name: 'Pronunciation Guide Audio',
      type: 'audio',
      size: '15.8 MB',
      uploadedBy: 'Guru Sharma',
      uploadedAt: new Date(Date.now() - 1800000)
    },
    {
      id: '3',
      name: 'Class Notes Template',
      type: 'document',
      size: '145 KB',
      uploadedBy: 'Guru Sharma',
      uploadedAt: new Date(Date.now() - 900000)
    }
  ]);

  const teacher = participants.find(p => p.role === 'teacher');
  const students = participants.filter(p => p.role === 'student');
  const raisedHands = students.filter(p => p.isHandRaised).length;

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="text-red-500" size={16} />;
      case 'video': return <Video className="text-purple-500" size={16} />;
      case 'audio': return <Mic className="text-green-500" size={16} />;
      case 'image': return <Monitor className="text-blue-500" size={16} />;
      default: return <FileText className="text-gray-500" size={16} />;
    }
  };

  const sendMessage = () => {
    if (!chatMessage.trim()) return;
    // In a real app, this would send the message to the server
    setChatMessage('');
  };

  return (
    <div className="h-screen bg-gradient-surface flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Sanskrit Literature - Bhagavad Gita Study</h1>
            <p className="text-sm text-muted-foreground">
              {participants.length} participants • Live since 2:30 PM
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300">
              🔴 LIVE
            </Badge>
            {raisedHands > 0 && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Hand size={12} />
                {raisedHands} hands raised
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Grid */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-full">
              {/* Teacher Video (Larger) */}
              <Card className="lg:col-span-2 lg:row-span-2 relative edu-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {teacher?.isVideoOn ? (
                    <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl font-bold">GS</span>
                        </div>
                        <p className="font-medium">{teacher?.name}</p>
                        <Badge className="mt-1">Teacher</Badge>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <VideoOff size={48} className="mx-auto mb-2 text-muted-foreground" />
                      <p className="font-medium">{teacher?.name}</p>
                      <Badge>Teacher</Badge>
                    </div>
                  )}
                </div>
                
                {/* Teacher Controls Overlay */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Badge variant={teacher?.isAudioOn ? "default" : "destructive"}>
                    {teacher?.isAudioOn ? <Mic size={12} /> : <MicOff size={12} />}
                  </Badge>
                  <Badge variant={teacher?.isVideoOn ? "default" : "destructive"}>
                    {teacher?.isVideoOn ? <Video size={12} /> : <VideoOff size={12} />}
                  </Badge>
                </div>
              </Card>

              {/* Student Videos */}
              {students.map((student) => (
                <Card key={student.id} className="relative edu-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                    {student.isVideoOn ? (
                      <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-white text-center">
                          <Avatar className="w-16 h-16 mx-auto mb-2">
                            <AvatarImage src={student.avatar} />
                            <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-medium">{student.name}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <VideoOff size={32} className="mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm font-medium">{student.name}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Student Status Overlay */}
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    <Badge variant={student.isAudioOn ? "default" : "destructive"} className="text-xs">
                      {student.isAudioOn ? <Mic size={10} /> : <MicOff size={10} />}
                    </Badge>
                    {student.isHandRaised && (
                      <Badge className="bg-yellow-500 text-white text-xs">
                        <Hand size={10} />
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="bg-card border-t border-border p-4">
            <div className="flex justify-center items-center gap-4">
              <Button
                variant={isAudioOn ? "default" : "destructive"}
                size="lg"
                onClick={() => setIsAudioOn(!isAudioOn)}
                className="rounded-full w-12 h-12"
              >
                {isAudioOn ? <Mic size={20} /> : <MicOff size={20} />}
              </Button>
              
              <Button
                variant={isVideoOn ? "default" : "destructive"}
                size="lg"
                onClick={() => setIsVideoOn(!isVideoOn)}
                className="rounded-full w-12 h-12"
              >
                {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
              </Button>
              
              <Button
                variant={isHandRaised ? "default" : "outline"}
                size="lg"
                onClick={() => setIsHandRaised(!isHandRaised)}
                className="rounded-full w-12 h-12"
              >
                <Hand size={20} />
              </Button>
              
              <Button
                variant={isScreenSharing ? "default" : "outline"}
                size="lg"
                onClick={() => setIsScreenSharing(!isScreenSharing)}
                className="rounded-full w-12 h-12"
              >
                <Monitor size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-12 h-12"
              >
                <Settings size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-card border-l border-border flex flex-col">
          {/* Sidebar Navigation */}
          <div className="border-b border-border p-2">
            <div className="grid grid-cols-4 gap-1">
              <Button
                variant={currentView === 'main' ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentView('main')}
                className="flex flex-col gap-1 h-auto py-2"
              >
                <Video size={16} />
                <span className="text-xs">Main</span>
              </Button>
              <Button
                variant={currentView === 'chat' ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentView('chat')}
                className="flex flex-col gap-1 h-auto py-2"
              >
                <MessageSquare size={16} />
                <span className="text-xs">Chat</span>
              </Button>
              <Button
                variant={currentView === 'participants' ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentView('participants')}
                className="flex flex-col gap-1 h-auto py-2"
              >
                <Users size={16} />
                <span className="text-xs">People</span>
              </Button>
              <Button
                variant={currentView === 'resources' ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentView('resources')}
                className="flex flex-col gap-1 h-auto py-2"
              >
                <BookOpen size={16} />
                <span className="text-xs">Files</span>
              </Button>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-hidden">
            {currentView === 'chat' && (
              <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-primary">{msg.senderName}</span>
                        <span className="text-xs text-muted-foreground">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-sm bg-muted p-2 rounded">{msg.message}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} size="sm">
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {currentView === 'participants' && (
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Teacher</h3>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-muted">
                    <Avatar>
                      <AvatarImage src={teacher?.avatar} />
                      <AvatarFallback>{teacher?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{teacher?.name}</p>
                      <div className="flex gap-1 mt-1">
                        <Badge variant={teacher?.isAudioOn ? "default" : "destructive"} className="text-xs">
                          {teacher?.isAudioOn ? <Mic size={10} /> : <MicOff size={10} />}
                        </Badge>
                        <Badge variant={teacher?.isVideoOn ? "default" : "destructive"} className="text-xs">
                          {teacher?.isVideoOn ? <Video size={10} /> : <VideoOff size={10} />}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Students ({students.length})</h3>
                  <div className="space-y-2">
                    {students.map((student) => (
                      <div key={student.id} className="flex items-center gap-3 p-2 rounded-lg bg-muted">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={student.avatar} />
                          <AvatarFallback className="text-xs">{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{student.name}</p>
                          <div className="flex gap-1 mt-1">
                            <Badge variant={student.isAudioOn ? "default" : "destructive"} className="text-xs">
                              {student.isAudioOn ? <Mic size={10} /> : <MicOff size={10} />}
                            </Badge>
                            {student.isHandRaised && (
                              <Badge className="bg-yellow-500 text-white text-xs">
                                <Hand size={10} />
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentView === 'resources' && (
              <div className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Class Resources</h3>
                  <Button size="sm" variant="outline">
                    <Upload size={14} className="mr-1" />
                    Upload
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {resources.map((resource) => (
                    <Card key={resource.id} className="p-3">
                      <div className="flex items-start gap-3">
                        {getFileIcon(resource.type)}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{resource.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {resource.size} • {resource.uploadedBy}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {resource.uploadedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Download size={14} />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualClassroom;