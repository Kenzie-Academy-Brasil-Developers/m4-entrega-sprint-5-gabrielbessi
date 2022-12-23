import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entities";
import { User } from "./user.entities";

@Entity("schedules_users_properties")
class Schedules_users_properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Properties, (properties) => properties.schedules)
  property: Properties;

  @ManyToOne(() => User, (user) => user.schedules)
  user: User;
}

export { Schedules_users_properties };
