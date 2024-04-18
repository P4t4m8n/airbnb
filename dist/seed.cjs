"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
const prisma = new client_1.PrismaClient();
async function main() {
    for (let i = 0; i < 10; i++) {
        const user = await prisma.user.create({
            data: {
                fullname: faker_1.faker.person.fullName(),
                email: faker_1.faker.internet.email(),
                imgUrl: faker_1.faker.image.avatar(),
            },
        });
        const location = await prisma.location.create({
            data: {
                country: faker_1.faker.location.country(),
                countryCode: faker_1.faker.location.countryCode(),
                city: faker_1.faker.location.city(),
                address: faker_1.faker.location.streetAddress(),
                lat: faker_1.faker.location.latitude(),
                lng: faker_1.faker.location.longitude(),
            },
        });
        const stay = await prisma.stay.create({
            data: {
                name: faker_1.faker.commerce.productName(),
                type: "Apartment",
                price: parseFloat(faker_1.faker.commerce.price()),
                summary: faker_1.faker.commerce.productDescription(),
                capacity: faker_1.faker.number.int({ min: 1, max: 12 }),
                rating: faker_1.faker.number.float({ min: 0, max: 5, precision: 0.1 }),
                hostId: user.id,
                locationId: location.id,
                images: {
                    create: [
                        { url: faker_1.faker.image.urlLoremFlickr({ category: "apartment" }) },
                        { url: faker_1.faker.image.urlLoremFlickr({ category: "apartment" }) },
                    ],
                },
                amenities: {
                    create: [{ name: "Wi-Fi" }, { name: "Air Conditioning" }],
                },
                labels: {
                    create: [{ name: "New" }, { name: "Sale" }],
                },
            },
        });
        const review = await prisma.review.create({
            data: {
                text: faker_1.faker.lorem.sentence(),
                rate: faker_1.faker.number.int({ min: 1, max: 5 }),
                userId: user.id,
                stayId: stay.id,
            },
        });
        const like = await prisma.like.create({
            data: {
                userId: user.id,
                stayId: stay.id,
            },
        });
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
