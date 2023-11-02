import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Trip } from 'src/trips/schemas/trip.schema';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop({
    unique: true,
    uppercase: true,
    // TODO: figure out a way to get roll no of the student
    // apart from asking the student for it
    // required: true,
  })
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
