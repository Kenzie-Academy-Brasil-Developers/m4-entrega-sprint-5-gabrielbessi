import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from "typeorm";
import { Properties } from "./properties.entities";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  district: string;

  @Column()
  number: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToOne(() => Properties, (properties) => properties.adresses)
  properties: Properties;
}

export { Addresses };
