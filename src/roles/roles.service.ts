import { Injectable } from '@nestjs/common';
import { Role } from './roles.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async createRole(dto: CreateRoleDto) {
        return await this.roleRepository.create(dto);
    }

    async getRoleByValue(value: string) {
        return await this.roleRepository.findOne({ where: { value: value } });
    }
}
