import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Student } from 'src/students/schemas/student.schema';

export type TripDocument = HydratedDocument<Trip>;

@Schema()
export class Trip {
  @Prop({ required: true, default: new Date() })
  outTime: Date;

  @Prop({ min: new Date(), expires: 2678400 })
  inTime: Date;

  @Prop({
    required: true,
    immutable: true,
    type: MongooseSchema.Types.ObjectId,
    ref: 'Student',
  })
  student: Student;

  @Prop({
    required: true,
    immutable: true,
    type: MongooseSchema.Types.ObjectId,
  })
  // TODO: Replace with typeof SecurityGuard
  verifiedBy: MongooseSchema.Types.ObjectId;
}

export const TripSchema = SchemaFactory.createForClass(Trip);
