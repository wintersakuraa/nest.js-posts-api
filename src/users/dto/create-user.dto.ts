import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'user@gmail.com', description: "user's email" })
    @IsNotEmpty({ message: 'field cannot ba empty' })
    @IsString({ message: 'field must be type of string' })
    @IsEmail({}, { message: 'invalid email format' })
    email: string;

    @ApiProperty({ example: '123456', description: "user's password " })
    @IsNotEmpty({ message: 'field cannot ba empty' })
    @IsString({ message: 'field must be type of string' })
    @Length(6, 20, { message: 'password must be 4-20 characters' })
    password: string;
}
