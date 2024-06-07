import { useQuery } from "@tanstack/react-query";
import { gql, GraphQLClient } from "graphql-request";
import { Book } from "../../types.ts";

interface BooksQueryResponse {
  books: Book[];
}

const endpoint = "http://localhost:4000/graphql";

const graphQLClient = new GraphQLClient(endpoint);

const GET_BOOKS = gql`
  query getBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const fetchBooks = async (): Promise<Book[]> => {
  const data = await graphQLClient.request<BooksQueryResponse>(GET_BOOKS);
  return data.books;
};

export const useBooks = () => {
  return useQuery<Book[], Error>({
    queryKey: ["books"],
    queryFn: () => fetchBooks(),
  });
};
