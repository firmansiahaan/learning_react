import { faker } from '@faker-js/faker';

const BigList = [...Array(5000)].map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar()
}));

export default BigList;