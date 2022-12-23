import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./addresses.entities";
import { Categories } from "./categories.entites";
import { Schedules_users_properties } from "./schedules_users_properties.entites";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @Column({ type: "date" })
  createdAt: Date;

  @Column({ type: "date" })
  updatedAt: Date;

  @OneToOne(() => Addresses, (addresses) => addresses.properties)
  @JoinColumn()
  adresses: Addresses;

  @ManyToOne(() => Categories, (categories) => categories.properties)
  category: Categories;

  @OneToMany(
    () => Schedules_users_properties,
    (userProperties) => userProperties.property
  )
  schedules: Schedules_users_properties[];
}

export { Properties };
