import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AssignRoleDto, CreateUserDto } from './dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { JwtAuthGuard, RolesGuard } from '../auth/guard';
import { Roles } from '../auth/decorator';

@ApiTags('User')
@Controller('/users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({ status: 201, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, type: [User] })
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

    @ApiOperation({ summary: 'Assign role' })
    @ApiResponse({ status: 200 })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/role')
    assignRole(@Body() dto: AssignRoleDto) {
        return this.userService.assignRole(dto);
    }
}
