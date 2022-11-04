import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AssignRoleDto {
    @IsNotEmpty({ message: 'field cannot ba empty' })
    @IsString({ message: 'field must be type of string' })
    value: string;

    @IsNotEmpty({ message: 'field cannot ba empty' })
    @IsNumber({}, { message: 'field must be type of number' })
    userId: number;
}
