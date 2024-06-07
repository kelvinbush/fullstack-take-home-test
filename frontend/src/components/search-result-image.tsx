import { styled } from "@mui/material";

const Image = styled("img")(() => ({
  width: "auto",
  height: "60px",
  borderRadius: "4px",
}));

interface ImageProps {
  imageUrl: string;
  title: string;
}

const SearchResultImage = ({ imageUrl, title }: ImageProps) => {
  return <Image src={imageUrl} alt={title} />;
};

export default SearchResultImage;
