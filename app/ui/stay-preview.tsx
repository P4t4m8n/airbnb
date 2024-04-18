import Image from "next/image";
import { StayModal } from "../service/stay-service";
interface Props {
  stay: StayModal;
}
export default function StayPreview({ stay }: Props) {
  const { imgUrls, name, rating } = stay;
  return (
    <>
      <Image src={imgUrls[0]} alt=""></Image>
    </>
  );
}
