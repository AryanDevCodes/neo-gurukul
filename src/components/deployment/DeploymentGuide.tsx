import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Cloud, 
  Server, 
  Database, 
  Upload, 
  CheckCircle, 
  AlertCircle,
  Copy,
  ExternalLink
} from 'lucide-react';
import { toast } from 'sonner';

const DeploymentGuide = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const deploymentSteps = [
    {
      title: "Frontend Deployment",
      description: "Deploy React app to Vercel/Netlify",
      status: "completed",
      icon: Cloud
    },
    {
      title: "Backend Setup",
      description: "Deploy Java Spring Boot to AWS/Heroku",
      status: "pending",
      icon: Server
    },
    {
      title: "Database Migration",
      description: "Setup PostgreSQL database",
      status: "pending", 
      icon: Database
    },
    {
      title: "Media Storage",
      description: "Configure S3 for file uploads",
      status: "pending",
      icon: Upload
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="w-6 h-6 text-blue-600" />
            Deployment Pipeline Status
          </CardTitle>
          <CardDescription>
            Track your deployment progress across all services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {deploymentSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg">
                  <div className={`p-2 rounded-lg ${
                    step.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <IconComponent size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                    <Badge 
                      variant={step.status === 'completed' ? 'default' : 'secondary'}
                      className="mt-1 text-xs"
                    >
                      {step.status === 'completed' ? 'Deployed' : 'Pending'}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="frontend" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Deployment (Vercel)</CardTitle>
              <CardDescription>Deploy your React app to Vercel with automatic CI/CD</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1. Install Vercel CLI</h4>
                <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex justify-between items-center">
                  <span>npm i -g vercel</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard('npm i -g vercel', 'Vercel install command')}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2. Deploy to Vercel</h4>
                <div className="bg-black text-green-400 p-3 rounded font-mono text-sm flex justify-between items-center">
                  <span>vercel --prod</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard('vercel --prod', 'Vercel deploy command')}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Environment Variables</h4>
                    <p className="text-blue-700 text-sm mt-1">
                      Don't forget to set your environment variables in Vercel dashboard:
                      VITE_API_URL, VITE_SUPABASE_URL, etc.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backend">
          <Card>
            <CardHeader>
              <CardTitle>Java Spring Boot Deployment (AWS/Heroku)</CardTitle>
              <CardDescription>Deploy your Java backend with PostgreSQL integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1. Create application.yml</h4>
                <div className="bg-black text-green-400 p-3 rounded font-mono text-sm relative">
                  <pre className="whitespace-pre-wrap text-xs">{`spring:
  datasource:
    url: \${DATABASE_URL:jdbc:postgresql://localhost:5432/dharma_db}
    username: \${DB_USERNAME:postgres}
    password: \${DB_PASSWORD:password}
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
  servlet:
    multipart:
      max-file-size: 50MB
      max-request-size: 50MB

server:
  port: \${PORT:8080}

cors:
  allowed-origins: \${FRONTEND_URL:http://localhost:3000}`}</pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`spring:
  datasource:
    url: \${DATABASE_URL:jdbc:postgresql://localhost:5432/dharma_db}
    username: \${DB_USERNAME:postgres}
    password: \${DB_PASSWORD:password}
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
  servlet:
    multipart:
      max-file-size: 50MB
      max-request-size: 50MB

server:
  port: \${PORT:8080}

cors:
  allowed-origins: \${FRONTEND_URL:http://localhost:3000}`, 'Application config')}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2. Heroku Deployment</h4>
                <div className="space-y-2">
                  {[
                    'heroku create dharma-education-api',
                    'heroku addons:create heroku-postgresql:hobby-dev',
                    'git push heroku main'
                  ].map((cmd, index) => (
                    <div key={index} className="bg-black text-green-400 p-2 rounded font-mono text-sm flex justify-between items-center">
                      <span>{cmd}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(cmd, `Heroku command ${index + 1}`)}
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database">
          <Card>
            <CardHeader>
              <CardTitle>PostgreSQL Database Setup</CardTitle>
              <CardDescription>Database schema and migration scripts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Database Migration Script</h4>
                <div className="bg-black text-green-400 p-3 rounded font-mono text-sm relative max-h-64 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-xs">{`-- Create database
CREATE DATABASE dharma_education;

-- Users table
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('STUDENT', 'TEACHER', 'PARENT', 'ADMIN')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses table
CREATE TABLE courses (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    teacher_id BIGINT REFERENCES users(id),
    category VARCHAR(100),
    price DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Media files table
CREATE TABLE media_files (
    id BIGSERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255) NOT NULL,
    content_type VARCHAR(100) NOT NULL,
    file_size BIGINT NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    category VARCHAR(50) NOT NULL,
    uploaded_by BIGINT REFERENCES users(id),
    course_id BIGINT REFERENCES courses(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}</pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`-- Create database
CREATE DATABASE dharma_education;

-- Users table
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('STUDENT', 'TEACHER', 'PARENT', 'ADMIN')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses table
CREATE TABLE courses (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    teacher_id BIGINT REFERENCES users(id),
    category VARCHAR(100),
    price DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Media files table
CREATE TABLE media_files (
    id BIGSERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255) NOT NULL,
    content_type VARCHAR(100) NOT NULL,
    file_size BIGINT NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    category VARCHAR(50) NOT NULL,
    uploaded_by BIGINT REFERENCES users(id),
    course_id BIGINT REFERENCES courses(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`, 'Database schema')}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media">
          <Card>
            <CardHeader>
              <CardTitle>Media Storage Configuration</CardTitle>
              <CardDescription>AWS S3 setup for file uploads and streaming</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">AWS S3 Configuration</h4>
                <div className="bg-black text-green-400 p-3 rounded font-mono text-sm relative">
                  <pre className="whitespace-pre-wrap text-xs">{`aws:
  s3:
    bucket-name: dharma-education-media
    region: us-east-1
    access-key: \${AWS_ACCESS_KEY}
    secret-key: \${AWS_SECRET_KEY}
  cloudfront:
    domain: \${CLOUDFRONT_DOMAIN}

file-upload:
  max-size: 100MB
  allowed-types:
    - video/mp4
    - video/webm
    - audio/mp3
    - audio/wav
    - image/jpeg
    - image/png
    - application/pdf`}</pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`aws:
  s3:
    bucket-name: dharma-education-media
    region: us-east-1
    access-key: \${AWS_ACCESS_KEY}
    secret-key: \${AWS_SECRET_KEY}
  cloudfront:
    domain: \${CLOUDFRONT_DOMAIN}

file-upload:
  max-size: 100MB
  allowed-types:
    - video/mp4
    - video/webm
    - audio/mp3
    - audio/wav
    - image/jpeg
    - image/png
    - application/pdf`, 'S3 configuration')}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900">CDN Benefits</h4>
                    <p className="text-green-700 text-sm mt-1">
                      Using CloudFront CDN ensures fast video streaming globally and reduces bandwidth costs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DeploymentGuide;