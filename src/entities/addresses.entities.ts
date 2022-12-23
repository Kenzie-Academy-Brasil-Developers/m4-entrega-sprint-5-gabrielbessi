import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from "typeorm";
import { Properties } from "./properties.entities";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  district: string;

  @Column({ length: 6 })
  number: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @OneToOne(() => Properties, (properties) => properties.adresses)
  properties: Properties;
}

export { Addresses };
