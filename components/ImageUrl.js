import Image from "next/image";

const myLoader = ({ src, width, height }) => {
  return `https://placeimg.com/${width||80}/${height||80}/${src}`;
};

const ImageUrl = (props) => {
  return (
    <Image
      loader={myLoader}
      src="people"
      alt="Picture of the author"
      width={80}
      height={80}
    />
  );
};

export default ImageUrl;
