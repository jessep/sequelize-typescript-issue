import { Table, Column, Model, Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    database: "some_db",
    dialect: "sqlite",
    username: "root",
    password: "",
    storage: ":memory:",
    modelPaths: [__dirname]
});

@Table
class User extends Model<User> {
    @Column
    name!: string;

    @Column
    birth!: Date;

    @Column
    state!: boolean;

    @Column
    card!: number;
}

// I had hoped that sequelize-typescript would protect me
// from attempting to create instances with bad data
const user = User.create({
    random: null,
    attributes: "blah",
    no: new Date(),
    error: false
});
