import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BanUserDto {
    @IsNotEmpty({ message: 'field cannot ba empty' })
    @IsNumber({}, { message: 'field must be type of number' })
    userId: number;

    @IsNotEmpty({ message: 'field cannot ba empty' })
    @IsString({ message: 'field must be type of string' })
    banReason: string;
}
