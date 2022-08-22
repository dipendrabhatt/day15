import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// import { Length } from "class-validator"
import Students from "./studentModel";

@Entity()
export  default class Subjects {
    @PrimaryGeneratedColumn()
    'id': number;

    @Column()
    'subName': string;

    @Column()
    'credit': number;

    @ManyToOne(()=>Students, students => students.subjects)
    'students': Students

       
}