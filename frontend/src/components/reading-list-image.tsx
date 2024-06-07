import { styled } from "@mui/material";

const Image = styled("img")(() => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
}));

interface ImageProps {
  imageUrl: string;
  title: string;
}

const ReadingListImage = ({ imageUrl, title }: ImageProps) => {
  return <Image src={imageUrl} alt={title} />;
};

export default ReadingListImage;
