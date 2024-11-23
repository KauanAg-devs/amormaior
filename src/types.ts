export interface BibleResponse {
    reference: string;
    verses: Array<{
      book_id: string;
      book_name: string;
      chapter: number;
      verse: number;
      text: string;
    }>;
    text: string;
    translation_id: string;
    translation_name: string;
  }
  