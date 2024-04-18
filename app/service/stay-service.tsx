import { storageService } from "./storage";
import { makeLorem, make_id } from "./util";

export interface UserModal {
  id: string;
  fullname: string;
  imgUrl: string;
}

export interface LocationModal {
  country: string;
  countryCode: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
}

export interface ReviewModal {
  id: string;
  stayId: string;
  txt: string;
  rate: number;
  by: UserModal;
}

export interface StayModal {
  id: string;
  name: string;
  type: string;
  imgUrls: string[];
  price: number;
  summary: string;
  capacity: number;
  amenities: string[];
  labels: string[];
  host: UserModal;
  loc: LocationModal;
  reviews: ReviewModal[];
  likedByUsers: string[];
  rating: number;
}

export const STAY_DB = "stay_db";

export const stayService = {
  fetchStays,
};

async function fetchStays(): Promise<StayModal[]> {
  let stays: StayModal[] = [];
  try {
    stays = await storageService.query(STAY_DB);
    if (!stays || stays.length <= 0) stays = _loadStays();

    return stays;
  } catch (error) {
    console.error("Error fetching stays:", error);
    return [];
  }
}

const _loadStays = () => {
  const stays: StayModal[] = [];
  for (let i = 0; i < 20; i++) {
    stays.push(_createStay());
  }

  return stays;
};

const _createStay = () => {
  const id = make_id();
  return {
    id,
    name: makeLorem(2),
    type: "House",
    imgUrls: ["public/1.jpg", "public/1.jpg"],
    price: 123,
    summary: makeLorem(Math.random() * 8),
    capacity: Math.random() * 8,
    amenities: [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics",
    ],
    labels: ["Top of the world", "Trending", "Play", "Tropical"],
    host: {
      id: "u101",
      fullname: "Davit Pok",
      imgUrl: `https://robohash.org/${id}.png`,
    },
    loc: {
      country: "Portugal",
      countryCode: "PT",
      city: "Lisbon",
      address: "17 Kombo st",
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: "madeId",
        txt: "Very helpful hosts. Cooked traditional...",
        rate: 4,
        by: {
          id: "u102",
          fullname: "user2",
          imgUrl: "/img/img2.jpg",
        },
      },
    ],
    likedByUsers: [],
    rating: (Math.random() + 1) * 5,
  };
};
