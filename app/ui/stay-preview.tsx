import Image from "next/image";
import { Stay } from "../model/stay.model";
interface Props {
  stay: Stay;
}
export default function StayPreview({ stay }: Props) {

  const { images, name, rating } = stay;
  // console.log("images:", images)
  return (
    <>
      <Image width={160} height={320} src={images[0].url} alt=""></Image>
    </>
  );
}
