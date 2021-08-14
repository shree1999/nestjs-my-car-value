import { IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @IsEmail()
  @ApiProperty({
    example: 'test@domain.com',
    description: 'The email of the user',
    type: String,
  })
  email: string;

  @IsString()
  @Length(10, 20)
  @ApiProperty({
    example: 'your_password',
    description: 'Provide password',
    type: String,
  })
  password: string;
}
