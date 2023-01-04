import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses, (properties) => properties.properties)
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, (categories) => categories.properties)
  category: Categories;

  @OneToMany(
    () => Schedules_users_properties,
    (userProperties) => userProperties.property
  )
  schedules: Schedules_users_properties[];
}

export { Properties };
