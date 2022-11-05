import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.model';

interface IPostCreation {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, IPostCreation> {
    @ApiProperty({ example: '1', description: 'unique identifier' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'some title', description: 'post title' })
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @ApiProperty({
        example: 'this is an example post content',
        description: 'post content section',
    })
    @Column({ type: DataType.STRING, allowNull: false })
    content: string;

    @ApiProperty({ example: '', description: 'post image' })
    @Column({ type: DataType.STRING })
    image: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => User)
    author: User;
}
