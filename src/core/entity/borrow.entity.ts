import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/database/base.entity';
import { User } from 'src/core/entity/user.entity';
import { Book } from 'src/core/entity/book.entity';

@Entity('borrow')
export class Borrow extends BaseEntity {
  @ManyToOne(() => User, (user) => user.borrows, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  userId: User;

  @ManyToOne(() => Book, (book) => book.borrows, {
  onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
  bookId: Book;

  @Column({ type: 'timestamp' })
  borrow_date: Date;

  @Column({ type: 'timestamp' })
  due_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  return_date?: Date;

  @Column({ type: 'boolean', default: false })
  overdue: boolean;
}
