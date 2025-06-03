import { PrismaClient, Prisma } from "../generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.DefaultUserCreateInput[] = [
    {
        name: "Demo User",
        email: "wealth@email.com",
    },
];

export async function main() {
    await prisma.defaultUser.create({ data: userData[0] });
}

main();