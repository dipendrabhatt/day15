import { Blob } from "buffer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class UserPhoto {

    @PrimaryGeneratedColumn()
    'id': number;

    @Column()
    'filename': string;

    @Column()
    'description': string;
}