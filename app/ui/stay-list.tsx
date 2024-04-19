import { Stay } from "../model/stay.model";
import StayPreview from "./stay-preview";

interface Props {
  stays: Stay[];
}

export default function StayList({ stays }: Props) {
  return (
    <ul>
      {stays.map((stay) => (
        <li key={stay.id}>
          <StayPreview stay={stay} />
        </li>
      ))}
    </ul>
  );
}
