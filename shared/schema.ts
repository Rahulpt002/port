import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  price: integer("price").notNull(), // Price in cents
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  sqft: integer("sqft").notNull(),
  imageUrl: text("image_url").notNull(),
  description: text("description"),
});

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").notNull(),
  renterName: varchar("renter_name", { length: 255 }).notNull(),
  renterEmail: varchar("renter_email", { length: 255 }).notNull(),
  renterPhone: varchar("renter_phone", { length: 20 }).notNull(),
  appointmentDate: timestamp("appointment_date").notNull(),
  appointmentTime: varchar("appointment_time", { length: 10 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("pending"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const timeSlots = pgTable("time_slots", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").notNull(),
  date: timestamp("date").notNull(),
  time: varchar("time", { length: 10 }).notNull(),
  isBlocked: boolean("is_blocked").default(false).notNull(),
  isBooked: boolean("is_booked").default(false).notNull(),
});

export const insertPropertySchema = createInsertSchema(properties).omit({
  id: true,
});

export const insertAppointmentSchema = createInsertSchema(appointments).omit({
  id: true,
  createdAt: true,
}).extend({
  appointmentDate: z.string().transform((str) => new Date(str)),
});

export const insertTimeSlotSchema = createInsertSchema(timeSlots).omit({
  id: true,
});

export type Property = typeof properties.$inferSelect;
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Appointment = typeof appointments.$inferSelect;
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type TimeSlot = typeof timeSlots.$inferSelect;
export type InsertTimeSlot = z.infer<typeof insertTimeSlotSchema>;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
