export type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  tags?: string[];
  // rest
  [key: string]: any;
};