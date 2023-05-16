export interface Blog {
  id: number;
  attributes: {
    author: {
      data: {
        id: number;
        attributes: {
          name: string
        }
      }
    },
    category: {
      data: {
        id: number;
        attributes: {
          name: string;
          slug: string;
        }
      }
    },
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        }
      }
    }
    content: string;
    createdAt: string;
    description: string;
    locale: string;
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
  }
}