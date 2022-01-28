import { Item, Image, Text } from "./CastItem.styled";
export default function CastItem({ name, character, imageUrl }) {
  return (
    <Item>
      <Image src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <Text>Character: {character}</Text>
    </Item>
  );
}
