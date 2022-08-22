import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Length } from "class-validator"
import Subjects from "./subjectsModel";

@Entity()
export default class Students {
    @PrimaryGeneratedColumn()
    'id': number;

    @Column()
    'studentName': string;

    @Column()
    'rollNo': number;

    @OneToMany(() => Subjects, subjects => subjects.students)
    'subjects': Subjects
}