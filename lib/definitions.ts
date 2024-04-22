export interface Faq {
  id: number;
  attributes: {
    question: string;
    answer: string;
    audience: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  }
}