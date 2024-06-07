import { useBooksStore } from "../hooks/useBooksStore.ts";
import { Box, Typography } from "@mui/material";
import ReadingListItem from "./reading-list-item.tsx";

const ReadingList = () => {
  const { books: readingList, removeBook } = useBooksStore();

  const onRemoveFromList = (title: string) => {
    removeBook(title);
  };
  return (
    <Box
      sx={{
        py: 4,
        width: { sm: 1, lg: 1000 },
      }}
    >
      <Typography variant="h6">Reading List</Typography>
      {readingList.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            my: 3,
          }}
        >
          You have no items in the list, please search to add one.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mt: 2,
          }}
        >
          {readingList.map((book, index) => (
            <ReadingListItem
              key={index}
              onRemoveFromReadingList={() => onRemoveFromList(book.title)}
              {...book}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ReadingList;
