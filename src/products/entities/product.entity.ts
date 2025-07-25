import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from "./product-image.entity";
import { User } from "src/auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'products'})
export class Product {

    @ApiProperty({
        example: 'eb97326d-18ea-418e-a27c-b7da870c002d',
        description: 'Product id',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty(
        {
        example: 'Playera polo',
        description: 'Product title',
        uniqueItems: true
    }
    )
    @Column('text', { unique: true })
    title: string;

    @ApiProperty(
        {
        example: 499.00,
        description: 'Product price',        
    }
    )
    @Column('float', { default: 0 })
    price: number

    @ApiProperty({
        example: 'Playera blanca bonita',
        description: 'Product description',
        default: null
    })
    @Column( {
        type: 'text',
        nullable: true
    })
    description: string;

    @ApiProperty({
        example: 'playera_polo',
        description: 'Product SLUG - for SEO',
        uniqueItems: true
    })
    @Column('text', {
        unique: true
    })
    slug: string

    @ApiProperty({
        example: 10,
        description: 'Product stock',
        default: 0
    })
    @Column('int', {
        default: 0
    })
    stock: number

    @ApiProperty({
        example: ['S', 'M', 'L'],
        description: 'Product sizes',        
    })
    @Column('text', { array: true })
    sizes: string []

    @ApiProperty({
        example: 'women',
        description: 'Product gender',        
    })
    @Column('text')
    gender: string;

    @ApiProperty()
    @Column('text', {
        array: true,
        default: []
    })
    tags: string[]

    @ApiProperty()
    @OneToMany(
        () => ProductImage, 
        (producImage) => producImage.product, 
        {cascade: true, eager: true})
    images?: ProductImage[];

    @ManyToOne(
        () => User,
        ( user ) => user.product
    )
    user: User


    @BeforeInsert()
    checkSlugInsert(){
        if( !this.slug){
            this.slug = this.title
        }

        this.slug = this.slug        
        .toLowerCase()
        .replaceAll(' ', '_')
        .replaceAll("'",'')
      
    }

    @BeforeUpdate()
    checkSlugUpdate(){
        this.slug = this.slug
        .toLowerCase()
        .replaceAll(' ', '_')
        .replaceAll("'",'')
    }
}
