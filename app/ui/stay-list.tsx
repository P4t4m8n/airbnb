import { StayModal } from "../service/stay-service";
import StayPreview from "./stay-preview";

interface Props {
  stays: StayModal[];
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
