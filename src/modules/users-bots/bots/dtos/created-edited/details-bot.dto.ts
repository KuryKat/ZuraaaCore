import { MaxLength, IsNotEmpty, Length, IsEnum, ArrayMaxSize, ArrayMinSize, IsOptional } from 'class-validator'
import { AppLibrary, BotsTags } from '../../enums/details.enums'

export default class DetailsBotDto {
  @Length(1, 15)
  prefix!: string

  @ArrayMaxSize(6)
  @ArrayMinSize(1)
  @IsEnum(BotsTags, {
    each: true
  })
  tags!: BotsTags[]

  @IsNotEmpty()
  @IsEnum(AppLibrary)
  library!: AppLibrary

  @MaxLength(255)
  @IsOptional()
  customInviteLink!: string

  @Length(3, 300)
  shortDescription!: string

  @IsOptional()
  @MaxLength(100000)
  longDescription!: string

  isHTML!: boolean

  @IsOptional()
  @MaxLength(10)
  supportServer!: string

  @IsOptional()
  @MaxLength(255)
  website!: string

  @IsOptional()
  @MaxLength(5, {
    each: true
  })
  otherOwners!: string[]
}
