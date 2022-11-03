import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'user@gmail.com', description: "user's email" })
    email: string;

    @ApiProperty({ example: '123456', description: "user's password" })
    password: string;
}
