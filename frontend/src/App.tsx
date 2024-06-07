import {
  Box,
  CircularProgress,
  ClickAwayListener,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import SearchBar from "./components/search-bar.tsx";
import SearchResultItem from "./components/search-result-item.tsx";
import { useBooks } from "./hooks/api/useBooks.ts";
import { useState } from "react";
import { useBooksStore } from "./hooks/useBooksStore.ts";
import { Book } from "./types.ts";
import ReadingList from "./components/reading-list.tsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError, isSuccess } = useBooks();
  const { addBook } = useBooksStore();

  const onAddToList = (book: Book) => {
    addBook(book);
  };

  const handleClickAway = () => setSearchQuery("");

  const filteredData = isSuccess
    ? data.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  return (
    <Container>
      <Box
        sx={{
          py: 2,
          position: "sticky",
          top: 0,
          zIndex: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            color: "text.secondary",
          }}
          variant={"h5"}
        >
          Book Assignment
        </Typography>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box
            sx={{
              position: "relative",
              width: { sm: 1, lg: 1000 },
            }}
          >
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  p: "2px 4px",
                  width: { sm: 1, lg: 1000 },
                  maxHeight: "500px",
                  overflowY: "auto",
                  position: "absolute",
                  zIndex: 2,
                  top: "60px",
                }}
              >
                {isLoading && (
                  <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                    <CircularProgress />
                  </Box>
                )}
                {filteredData.map((book, index) => (
                  <SearchResultItem
                    key={index}
                    onAddToReadingList={() => onAddToList(book)}
                    {...book}
                  />
                ))}
                {!isLoading && filteredData.length === 0 && (
                  <Typography>No book was found</Typography>
                )}
                {isError && <Typography>Something went wrong</Typography>}
              </Paper>
            )}
          </Box>
        </ClickAwayListener>
      </Box>
      <ReadingList />
    </Container>
  );
}

export default App;
