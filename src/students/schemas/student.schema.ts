import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Trip } from 'src/trips/schemas/trip.schema';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop({ unique: true, required: true })
  rollNo: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  hostel: string;

  @Prop({
    insideCampus: { type: Boolean, required: true },
    currentTrip: { type: MongooseSchema.Types.ObjectId, ref: 'Trip' },
  })
  status: {
    insideCampus: boolean;
    currentTrip?: Trip;
  };
}

export const StudentSchema = SchemaFactory.createForClass(Student);
