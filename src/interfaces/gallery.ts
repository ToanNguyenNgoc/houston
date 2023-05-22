export interface Gallery {
  id: number;
  type: 'IMAGE_VILLA' | 'GALLERY_VILLA' | null;
  image: {
    id: number,
    name: string,
    file_name: string,
    mime_type: string,
    size: number,
    created_at: string,
    updated_at: string,
    original_url: string
  }
}