import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
    @IsNotEmpty({ message: 'field cannot ba empty' })
    @IsString({ message: 'field must be type of string' })
    value: string;

    @IsNotEmpty({ message: 'field cannot ba empty' })
    @IsString({ message: 'field must be type of string' })
    description: string;
}
