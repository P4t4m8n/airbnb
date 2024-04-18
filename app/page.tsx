import { stayService } from "./service/stay-service";
import StayFilter from "./ui/stay-filter";
import StayList from "./ui/stay-list";

export default async function Home() {
  const stays = await stayService.fetchStays();
  return (
    <main>
      <StayFilter />
      <StayList stays={stays} />
    </main>
  );
}
