import { 
    BaseEntity,
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    Timestamp, 
    UpdateDateColumn,     
} from "typeorm";

@Entity()
export class Engine extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique: true})
    tag: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    current: number;

    @Column({nullable: true})
    power: number;

    @Column({nullable: true})
    rpm: number;

    @Column()
    area: string;

    @Column()
    createdFor: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAd: Timestamp;
}