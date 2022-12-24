import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from "typeorm";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 6 })
  number: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;
}

export { Addresses };
