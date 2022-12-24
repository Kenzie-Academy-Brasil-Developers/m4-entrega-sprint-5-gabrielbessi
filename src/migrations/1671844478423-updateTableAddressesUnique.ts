import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTableAddressesUnique1671844478423 implements MigrationInterface {
    name = 'updateTableAddressesUnique1671844478423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_5aa0a476a4b94bd787cf58e12c0"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_b15a1e7aba3a37fb34fabec8681"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_977ab4e1bbd4f92802a98a9c444"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_fbf5cffb90f6a40bd43af7ffe55"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_dec4ebd2fa2ab82db7228e08189"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_dec4ebd2fa2ab82db7228e08189" UNIQUE ("state")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_fbf5cffb90f6a40bd43af7ffe55" UNIQUE ("city")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_977ab4e1bbd4f92802a98a9c444" UNIQUE ("number")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_b15a1e7aba3a37fb34fabec8681" UNIQUE ("zipCode")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_5aa0a476a4b94bd787cf58e12c0" UNIQUE ("district")`);
    }

}
