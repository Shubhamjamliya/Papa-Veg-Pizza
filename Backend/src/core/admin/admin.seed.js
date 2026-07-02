import { FoodAdmin } from "./admin.model.js";
import { logger } from "../../utils/logger.js";

export const seedSuperAdmin = async () => {
    try {
        const hasSuperAdmin = await FoodAdmin.findOne({ role: "superadmin" });
        if (!hasSuperAdmin) {
            await FoodAdmin.create({
                email: "superadmin@store.com",
                password: "123456",
                name: "Super Admin",
                role: "superadmin",
                emailVerified: true,
                isActive: true,
                isDeleted: false,
                permissions: ["*"]
            });
            logger.info(" seeded default superadmin account: superadmin@store.com / 123456");
        }
    } catch (err) {
        logger.error("Error seeding superadmin: " + err.message);
    }
};
