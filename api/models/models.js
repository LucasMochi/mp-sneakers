import User from "./User.js";
import Role from "./Role.js";
import Product from "./Product.js"

Role.hasMany(User, {
    foreignKey: "roleId",
});
User.belongsTo(Role, {
    foreignKey: "roleId",
})

Product.belongsToMany(User, { through: Favorites })
User.belongsToMany(Product, { through: Favorites })

export { User, Role, Product };