interface AuthorDTO {
  id: number;
  name: string;
  surname: string;
  info: string;
}

interface GenreDTO {
  id: number;
  name: string;
  info: string;
}
export interface GetBookResponse {
  id: number;
  title: string;
  description: string;
  quantity: number;
  authors: AuthorDTO[];
  genres: GenreDTO[];
}
