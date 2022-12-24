import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTablePropertiesAndAddresses1671835959513 implements MigrationInterface {
    name = 'updateTablePropertiesAndAddresses1671835959513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_672d1164dcbb054275e37c049ff"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "adressesId" TO "addressId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "addressId" TO "adressesId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_672d1164dcbb054275e37c049ff" FOREIGN KEY ("adressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
