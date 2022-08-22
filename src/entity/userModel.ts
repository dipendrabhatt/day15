import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Length } from "class-validator"

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    'id': number;

    @Column()
    'userName': string;

    @Column()
    @Length(10)
    'phone': number;

    @Column()
    'email': string;
}