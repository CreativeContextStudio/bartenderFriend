// Documents would come from DB if connected, otherwise empty
const documents: any[] = [];
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { DocumentUpload } from '@/components/forms/document-upload';

export default function DocumentsPage() {
  // Documents would come from DB if connected
  // For now, show empty state with upload option

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Documents Library</h1>
          <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
            Reference documents, guides, and resources.
          </p>
        </div>
        <DocumentUpload />
      </div>

      {documents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <Card key={doc.id} className="border-brutal hover:scale-[1.02] transition-all duration-200">
              <CardHeader className="border-b-4 border-brutal">
                <div className="flex items-start justify-between">
                  <FileText className="h-10 w-10 text-primary shrink-0 mr-4" />
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-2xl font-black line-clamp-2">{doc.title}</CardTitle>
                    {doc.file_type && (
                      <Badge variant="outline" className="mt-3 text-sm px-3 py-1.5 font-bold border-brutal-sm">
                        {doc.file_type.toUpperCase()}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {doc.description && (
                  <CardDescription className="text-base font-medium line-clamp-3 leading-relaxed">
                    {doc.description}
                  </CardDescription>
                )}
                {doc.tags && doc.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {doc.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-sm px-3 py-1.5 font-bold border-brutal-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                {doc.blob_url && (
                  <Link href={doc.blob_url} target="_blank">
                    <Button variant="outline" className="w-full border-brutal-sm font-bold" size="lg">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Open Document
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center space-y-4">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto" />
            <div>
              <p className="text-muted-foreground">No documents found.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Upload documents to store reference materials, guides, and resources.
              </p>
            </div>
            <DocumentUpload />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
