import User from "./User.js";
import Role from "./Role.js";
import Product from "./Product.js"
import Favourites from "./Favourites.js"

Role.hasMany(User, {
    foreignKey: "roleId",
});
User.belongsTo(Role, {
    foreignKey: "roleId",
})

Product.belongsToMany(User, { through: Favourites })
User.belongsToMany(Product, { through: Favourites })

export { User, Role, Product };