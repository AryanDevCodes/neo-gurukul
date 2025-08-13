import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MediaUploader from '@/components/media/MediaUploader';
import DeploymentGuide from '@/components/deployment/DeploymentGuide';
import { Upload, Settings, FileText } from 'lucide-react';

const MediaManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
            Media & Deployment Management 🚀
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive media handling and deployment configuration for your dharma education platform
          </p>
        </div>

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload size={16} />
              Media Upload
            </TabsTrigger>
            <TabsTrigger value="deployment" className="flex items-center gap-2">
              <Settings size={16} />
              Deployment
            </TabsTrigger>
            <TabsTrigger value="backend" className="flex items-center gap-2">
              <FileText size={16} />
              Backend Structure
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Media Upload & Management</CardTitle>
                <CardDescription>
                  Upload and manage videos, images, documents, and other learning materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MediaUploader />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment">
            <Card>
              <CardHeader>
                <CardTitle>Deployment Configuration</CardTitle>
                <CardDescription>
                  Step-by-step guides for deploying your application to production
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DeploymentGuide />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backend">
            <Card>
              <CardHeader>
                <CardTitle>Java Backend Structure</CardTitle>
                <CardDescription>
                  Complete Spring Boot project structure and implementation guide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    📁 Complete Java Backend Documentation
                  </h3>
                  <p className="text-blue-700 mb-4">
                    A comprehensive Java Spring Boot backend structure has been created for your academic project. 
                    This includes detailed project structure, entity models, security configuration, API endpoints, 
                    database migrations, and deployment scripts.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold mb-2">📋 What's Included:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Complete Spring Boot project structure with Maven</li>
                      <li>• JPA entities with Hibernate annotations</li>
                      <li>• JWT-based authentication and authorization</li>
                      <li>• RESTful API controllers with OpenAPI documentation</li>
                      <li>• PostgreSQL database schema and Flyway migrations</li>
                      <li>• AWS S3 integration for media file storage</li>
                      <li>• Docker containerization and deployment scripts</li>
                      <li>• Comprehensive testing strategy</li>
                      <li>• Security configuration with role-based access</li>
                      <li>• File upload handling for videos, images, and documents</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded border border-green-200">
                    <p className="text-green-800 text-sm">
                      <strong>📄 Documentation File:</strong> Check the <code>JAVA_BACKEND_STRUCTURE.md</code> file 
                      for the complete implementation guide with code examples, configuration files, and deployment instructions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MediaManagement;