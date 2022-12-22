import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./addresses.entities";
import { Categories } from "./categories.entites";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column()
  value: number;

  @Column()
  size: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToOne(() => Addresses, (addresses) => addresses.properties)
  @JoinColumn()
  adresses: Addresses;

  @ManyToOne(() => Categories, (categories) => categories.properties)
  category: Categories;
}

export { Properties };
