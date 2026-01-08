// Generic blob storage interface (S3-compatible)
// Supports R2, Vercel Blob, or S3

interface BlobConfig {
  endpoint: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucketName: string;
}

let blobConfig: BlobConfig | null = null;

export function initBlobStorage(config: BlobConfig) {
  blobConfig = config;
}

export async function uploadBlob(
  key: string,
  data: Buffer | Uint8Array,
  contentType: string
): Promise<{ url: string; key: string }> {
  if (!blobConfig) {
    throw new Error('Blob storage not initialized. Set BLOB_ENDPOINT, BLOB_ACCESS_KEY_ID, BLOB_SECRET_ACCESS_KEY, BLOB_BUCKET_NAME');
  }

  // For Phase 1, we'll use a simple implementation
  // In production, integrate with actual S3-compatible storage
  const url = `${blobConfig.endpoint}/${blobConfig.bucketName}/${key}`;
  
  // TODO: Implement actual upload logic with AWS SDK or similar
  // For now, return placeholder URL structure
  
  return { url, key };
}

export async function deleteBlob(key: string): Promise<void> {
  if (!blobConfig) {
    throw new Error('Blob storage not initialized');
  }
  
  // TODO: Implement actual delete logic
}

export function getBlobUrl(key: string): string {
  if (!blobConfig) {
    throw new Error('Blob storage not initialized');
  }
  
  return `${blobConfig.endpoint}/${blobConfig.bucketName}/${key}`;
}
